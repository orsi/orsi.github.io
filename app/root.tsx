import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

type ROUTE_ITEM = { path: string; label: string; children?: ROUTE_ITEM[] };
const ROUTE_TREE = [
  {
    label: "dev",
    path: "/dev",
    children: [
      {
        label: "résumé",
        path: "/resume",
      },
      {
        label: "projects",
        path: "/projects",
      },
      {
        label: "web",
        path: "/web",
      },
    ],
  },
  {
    label: "music",
    path: "/music",
  },
] as ROUTE_ITEM[];

export function Layout({ children }: { children: React.ReactNode }) {
  let location = useLocation();
  const parts =
    location.pathname === "/"
      ? null
      : location.pathname.split("/").filter((part) => part);

  function renderRouteNode(route: ROUTE_ITEM, prefix?: string) {
    const fullPath = `${prefix ? prefix : ""}${route.path}`;
    const isActive = location.pathname === fullPath;

    return (
      <li key={route.path}>
        <span>└─ </span>
        <Link className={isActive ? "underline" : ""} to={`${fullPath}/`}>
          {route.label}
        </Link>
        {route.children?.length && (
          <ul className="ml-4">
            {route.children?.map((child) => renderRouteNode(child, fullPath))}
          </ul>
        )}
      </li>
    );
  }

  function renderRouteTree(tree: ROUTE_ITEM[]) {
    return (
      <ul className="font-mono">
        {tree.map((route) => renderRouteNode(route))}
      </ul>
    );
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻</text></svg>"
        ></link>
        <Meta />
        <Links />
      </head>
      <body className="bg-mauve-900 text-gray-300/90 ">
        <div className="fixed w-screen h-screen z-0 bg-[#989898] bg-[url('/bg-480.jpg')] md:bg-[url('/bg-720.jpg')] lg:bg-[url('/bg-1080.jpg')] bg-cover bg-no-repeat bg-top-right bg-blend-color-burn" />
        <div className="relative max-w-3xl m-auto px-8 py-4 z-1">
          <div className="text-4xl leading-none font-mono font-thin">
            <div className="flex items-end">
              <h1>
                <Link to="/">orsi</Link>
              </h1>
              {parts && (
                <div className="ml-2 text-sm">
                  {parts.map((part) => (
                    <span key={part} className="opacity-25 ">
                      /{part}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <nav>{ROUTE_TREE.length && renderRouteTree(ROUTE_TREE)}</nav>
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
