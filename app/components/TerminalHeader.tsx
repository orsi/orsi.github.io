import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type CommandFunction = (
  args: string[],
  terminal: { clear: () => void },
) => ReactNode | undefined;

export function TerminalHeader({
  commands,
  init,
  prompt = "$",
}: {
  commands?: Record<string, CommandFunction>;
  init?: string;
  prompt?: string;
}) {
  const [input, setInput] = useState<string>(`${prompt}`);
  const [caretPosition, setCaretPosition] = useState({
    start: prompt.length,
    end: prompt.length,
  });
  const [output, setOutput] = useState<ReactNode[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const terminal = useRef({
    clear() {
      setOutput([]);
    },
  });

  function execute(textarea: HTMLTextAreaElement) {
    const value = textarea.value;

    const [command, ...args] = value.substring(prompt.length).split(" ");
    const commandFn = commands?.[command];

    if (!commandFn) {
      const commandList = Object.keys(commands ?? {});
      setOutput((v) => {
        return [
          ...v,
          `Command not found. Current commands: ${commandList.join(", ")}`,
        ];
      });
    } else {
      const result = commandFn(args, terminal.current);
      setOutput((v) => {
        if (result && Array.isArray(result)) {
          return [...v, ...result];
        } else if (result) {
          return [...v, result];
        } else {
          return v;
        }
      });
    }

    textarea.value = prompt;
    setInput(prompt);
    setCaretPosition({ start: prompt.length, end: prompt.length });
  }

  useEffect(() => {
    if (init == null || textareaRef.current == null) {
      return;
    }

    textareaRef.current.value = textareaRef.current.value + init;
    execute(textareaRef.current);

    return () => {
      setOutput([]);
    };
  }, [init]);

  useEffect(() => {
    setInput(prompt);
  }, [prompt]);

  useEffect(() => {
    if (textareaRef.current == null) {
      return;
    }
    textareaRef.current.focus();
  }, []);

  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.length <= prompt.length - 1) {
      return;
    }

    setInput(e.target.value);
    setCaretPosition({
      start: e.target.selectionStart!,
      end: e.target.selectionEnd!,
    });
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (!textareaRef.current) {
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      execute(textareaRef.current);
    }
  }

  function onSelect(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (!textareaRef.current) {
      return;
    }

    if (textareaRef.current.selectionStart < prompt.length) {
      textareaRef.current.setSelectionRange(
        prompt.length,
        textareaRef.current.selectionEnd,
      );
      setCaretPosition({
        start: prompt.length,
        end: textareaRef.current.selectionEnd,
      });
    } else {
      setCaretPosition({
        start: textareaRef.current.selectionStart,
        end: textareaRef.current.selectionEnd,
      });
    }
  }

  function onScroll() {
    if (!textareaRef.current) {
      return;
    }
    textareaRef.current.scrollTop = 0;
  }

  const before = input.substring(0, caretPosition.start);

  // textarea/input select positions sit infront of the characters
  // at the same position.
  //
  // e.g. for the input value "asdf", selection.start = 3 and selection.end=3
  // will have the caret before the "f": "asd|f". A selection.start=3 and
  // selection.end 4 will be the selection over "f": "asd|f|".
  const isRangeSelection = caretPosition.end - caretPosition.start > 0;
  const caret = isRangeSelection
    ? input.substring(caretPosition.start, caretPosition.end)
    : input[caretPosition.start];
  const after = isRangeSelection
    ? input.substring(caretPosition.end)
    : input.substring(caretPosition.end + 1);

  return (
    <div>
      <div className="flex">
        <div className="relative w-full">
          <textarea
            className={`pointer-none absolute inset-0 resize-none overflow-hidden font-mono text-wrap break-all whitespace-break-spaces text-transparent caret-transparent outline-none selection:bg-transparent`}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onSelect={onSelect}
            onScroll={onScroll} // not sure why textarea keeps moving slightly
            ref={textareaRef}
            spellCheck={false}
            value={input}
          />
          <pre className="text-wrap break-all whitespace-break-spaces">
            {before}
            <span
              className={`bg-maroon-400 ${isRangeSelection ? "" : "animate-blink"}`}
            >
              {caret ? caret : <> </>}
            </span>
            {after}
          </pre>
        </div>
      </div>
      {output.map((line, i) =>
        typeof line === "string" ? (
          <pre
            key={`line-${i}`}
            className="text-wrap break-all whitespace-break-spaces"
          >
            {line}
          </pre>
        ) : (
          <div key={`line-${i}`}>{line}</div>
        ),
      )}
    </div>
  );
}
