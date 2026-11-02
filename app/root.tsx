import "./app.css";
import { useState, type ReactNode } from "react";
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router";
import type { Route } from "./+types/root";
import { LinkedInLogo } from "./components/LinkedInLogo";
import GitHubLogo from "./components/GitHubLogo";
import { Copy, Mail } from "lucide-react";
import { Terminal } from "./components/Terminal";
import { Clock } from "./components/Clock";

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
    <main className="mt-2 font-mono">
      <h1 className="text-2xl">{message}</h1>
      <p className="mt-6">{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  let location = useLocation();
  const navigate = useNavigate();
  const [output, setOutput] = useState<ReactNode>(null);
  const [copied, setCopied] = useState(false);

  function onClickMailIcon() {
    if (window.navigator.clipboard) {
      window.navigator.clipboard.writeText("jonathon.orsi@gmail.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    }
  }

  const parts =
    location.pathname === "/"
      ? null
      : location.pathname.split("/").filter((part) => part);

  return (
    <html className="h-full" lang="en">
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
      <body className="flex min-h-screen">
        <div className="flex flex-1 flex-col">
          <nav className="sticky top-0 backdrop-blur-sm">
            <div className="border-b border-gray-900 px-4">
              <div className="mx-auto max-w-2xl">
                <div className="border-r border-l border-gray-900 px-2 py-2">
                  <div className="flex">
                    <div className="flex-1">
                      <Terminal
                        onCommand={(value) => {
                          const [command, ...args] = value.split(" ");
                          switch (command) {
                            case "cd": {
                              const path = args[0];
                              if (path === ".." && parts && parts.length > 0) {
                                const goto = parts.slice(0, parts.length - 1);
                                navigate(goto.join("/"));
                              } else {
                                navigate(args[0]);
                              }
                              break;
                            }
                            case "clear": {
                              setOutput(undefined);
                              break;
                            }
                            case "help": {
                              setOutput(
                                "Available commands: cd {path}, clear, help",
                              );
                              break;
                            }
                          }
                        }}
                        prompt={`$`}
                      />
                    </div>

                    <div className="flex-none">
                      <span className="font-mono text-xs">
                        <Clock />
                      </span>
                    </div>
                  </div>
                  {output != null && (
                    <div className="mt-2 ml-4 pl-2 font-mono text-xs">
                      {output}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={`border-b border-gray-900 px-4`}>
              <div className="mx-auto max-w-2xl">
                <div className="xs:flex-row flex flex-col gap-4 border-r border-l border-gray-900 px-2 py-2">
                  <ul className="xs:text-base flex gap-4 font-mono text-sm">
                    <li>
                      <Link
                        className={location.pathname === "/" ? "active" : ""}
                        to="/"
                      >
                        ~
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname === "/about" ? "active" : ""
                        }
                        to="/about"
                      >
                        /about
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname === "/projects" ? "active" : ""
                        }
                        to="/projects"
                      >
                        /projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex flex-1 px-4">
            <div className="mx-auto flex w-full max-w-2xl">
              <div className="flex-1 border-r border-l border-gray-900 px-2 py-2">
                {children}
              </div>
            </div>
          </div>

          <footer className="border-t border-gray-900 px-4">
            <div className="mx-auto max-w-2xl">
              <div className="flex border-r border-l border-gray-900 px-2 py-2">
                <ul className="ml-auto flex items-center gap-2">
                  <li className="w-4">
                    <a
                      className="text-gray-500 hover:text-gray-300"
                      href="https://www.linkedin.com/in/jonorsi/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <LinkedInLogo className="h-full w-full" />
                    </a>
                  </li>
                  <li className="w-4">
                    <a
                      className="text-gray-500 hover:text-gray-300"
                      href="https://github.com/orsi"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GitHubLogo className="h-full w-full" />
                    </a>
                  </li>
                  <li className="w-4">
                    <button
                      className="flex cursor-pointer items-center text-gray-500 hover:text-gray-300"
                      onClick={onClickMailIcon}
                    >
                      {copied ? (
                        <div className="relative">
                          <span className="absolute right-full bottom-full translate-x-1/2 px-1 py-0.5 text-xs leading-none">
                            <small>
                              <em>COPIED!</em>
                            </small>
                          </span>
                          <Copy className="h-full w-full" />
                        </div>
                      ) : (
                        <Mail className="h-full w-full" />
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
