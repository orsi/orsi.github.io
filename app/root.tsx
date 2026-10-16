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
import routes from "./routes";

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

export function Layout({ children }: { children: React.ReactNode }) {
  let location = useLocation();
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
          <h1 className="text-4xl tracking-wider font-serif">jonathon orsi</h1>
          <nav className="flex gap-2">
            {routes.map((route) => {
              const active =
                (!route.path && location.pathname === "/") ||
                location.pathname === route.path;
              console.log(active);
              return (
                <Link
                  className={active ? "" : "no-underline!"}
                  key={route.id}
                  to={route.path ? route.path : "/"}
                >
                  {route.index ? "home" : "résumé"}
                </Link>
              );
            })}
          </nav>
          <hr className="border-slate-800 mt-2" />
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

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
