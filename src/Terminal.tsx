import "./Terminal.css";
import { useEffect, useState } from "jinx";

const DEFAULT_LINES = [`Welcome!`, ``, `Available commands: "about", "clear"`];

export function Terminal() {
  const [lines, setLines] = useState<string[]>(DEFAULT_LINES);
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      if (/^.$/u.test(ev.key)) {
        // `key` matches a single unicode character
        setPrompt((value) => value + ev.key);
      } else if (ev.key === "Backspace") {
        setPrompt((value) => value.substring(0, value.length - 1));
      } else if (ev.key === "Enter" && prompt.trim().length > 0) {
        setPrompt("");
        setLines((value) => {
          let newValue = [...value];

          if (prompt.toLowerCase() === "about") {
            newValue.push(
              "",
              `Hi! I'm a full-stack engineer with 10+ years building web apps at startups and enterprises. I have a deep expertise in frontend component-based architecture and cloud-native microservices, with a proven history of technical leadership and impact at scale.`,
            );
          } else if (prompt.toLowerCase() === "clear") {
            newValue = DEFAULT_LINES;
          } else {
            newValue.push(`Unknown command: ${prompt}`);
          }

          setTimeout(() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }, 500);
          return newValue;
        });
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [prompt]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
        {lines.map((line) => (
          <li
            class="color-grey"
            style={{
              margin: "0",
              minHeight: "1rem",
              wordBreak: "break-all",
            }}
          >
            <pre style={{ whiteSpace: "break-spaces" }}>{line}</pre>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "inline-flex",
          position: "relative",
          wordBreak: "break-all",
        }}
      >
        <span>$</span>
        <pre style={{ marginLeft: ".3em", whiteSpace: "break-spaces" }}>
          {prompt}
          <span class="cursor">█</span>
        </pre>
        <input
          type="text"
          name="terminal"
          value=""
          style={{
            background: "transparent",
            border: "none",
            caretColor: "transparent",
            color: "transparent",
            fontSize: "1rem",
            outline: "none",
            padding: "0",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            zIndex: "2",
          }}
        />
      </div>
    </div>
  );
}
