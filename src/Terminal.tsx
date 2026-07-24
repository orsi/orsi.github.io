import "./Intro.css";
import { useEffect, useState } from "jinx";

export function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
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
          const newValue = [...value];

          if (newValue.length === 0) {
            newValue.push(
              "",
              `Site is currently under construction -- nothing to see here yet!`,
              "",
            );
          }

          newValue.push(`Unknown command: ${prompt}`);
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
      <div
        style={{
          display: "flex",
          position: "relative",
          wordBreak: "break-all",
        }}
      >
        <span>$</span>
        <span style={{ marginLeft: ".3em" }}>{prompt}</span>
        <span class="cursor">█</span>
        <input
          type="text"
          name="terminal"
          style={{
            background: "transparent",
            border: "none",
            color: "transparent",
            outline: "none",
            padding: "0",
            position: "absolute",
            width: "100%",
            zIndex: '2',
          }}
        />
      </div>
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
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
