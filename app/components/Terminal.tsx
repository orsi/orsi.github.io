import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
  type SyntheticEvent,
} from "react";

type CommandFunction = (args: string[]) => ReactNode | undefined;

export function Terminal({
  commands,
  init,
  prompt = "$",
  onOutput,
}: {
  commands?: Record<string, CommandFunction>;
  init?: string;
  prompt?: string;
  onOutput?: (output: ReactNode) => void;
}) {
  const [input, setInput] = useState<string>("");
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const characterRef = useRef<HTMLSpanElement>(null);
  const translateX = useRef(0);

  useEffect(() => {
    if (init == null || inputRef.current == null) {
      return;
    }

    inputRef.current.value = inputRef.current.value + init;
    execute(inputRef.current);
  }, [init]);

  function execute(inputEl: HTMLInputElement) {
    const value = inputEl.value;

    const [command, ...args] = value.split(" ");
    const commandFn = commands?.[command];

    if (!commandFn) {
      const commandList = Object.keys(commands ?? {});
      onOutput?.(
        `Command not found. Current commands: ${commandList.join(", ")}`,
      );
    } else {
      const result = commandFn(args);
      if (result) {
        onOutput?.(result);
      }
    }

    inputEl.value = "";
    setInput("");
    setSelectionStart(0);
    setSelectionEnd(0);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      execute(e.currentTarget);
    }
  }

  function onSelect(e: SyntheticEvent<HTMLInputElement>) {
    setSelectionStart(e.currentTarget.selectionStart ?? 0);
    setSelectionEnd(e.currentTarget.selectionEnd ?? 0);
  }

  function onFocus() {
    setHasFocus(true);
  }

  function onBlur() {
    setHasFocus(false);
  }

  useEffect(() => {
    if (
      inputRef.current == null ||
      caretRef.current == null ||
      characterRef.current == null
    ) {
      return;
    }

    let charWidth =
      characterRef.current.getBoundingClientRect().width /
      characterRef.current.textContent.length;
    if (isNaN(charWidth)) {
      charWidth = 1;
    }

    const inputScrollLeft = inputRef.current.scrollLeft;
    const inputWidth = inputRef.current.getBoundingClientRect().width;

    translateX.current = selectionStart * charWidth - inputScrollLeft;
    if (translateX.current > inputWidth) {
      translateX.current = inputWidth;
    } else if (translateX.current < 0) {
      translateX.current = 0;
    }

    caretRef.current.style.transform = `translateX(${translateX.current}px)`;
  }, [selectionStart]);

  // input field caret is in front/behind characters
  // e.g.
  //    "asd|f"   selectionStart = 3, selectionEnd = 3
  //    "asd|f|"  selectionStart = 3, selectionEnd = 4
  const isRangeSelection = selectionStart !== selectionEnd;
  const selectedText = isRangeSelection
    ? input.substring(selectionStart, selectionEnd)
    : input.substring(selectionStart, selectionEnd + 1);

  return (
    <label
      className="outline-maroon-400/80 flex cursor-text gap-1 rounded-full bg-black/80 px-4 py-2 font-mono outline-2 focus-within:outline-solid"
      htmlFor="terminal-input"
    >
      <span className="hidden flex-none sm:block">{prompt}</span>
      <span className="flex-none sm:hidden">$</span>
      <div className="relative flex w-full overflow-hidden">
        <span
          className="invisible absolute text-nowrap whitespace-pre"
          ref={characterRef}
        >
          {input}
        </span>
        <input
          className="relative z-1 w-full flex-1 caret-transparent outline-none selection:bg-transparent"
          id="terminal-input"
          name="terminal-input"
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onSelect={onSelect}
          ref={inputRef}
          spellCheck={false}
          type="text"
          value={input}
        />
        {hasFocus && (
          <span
            className={`${isRangeSelection ? "" : "animate-blink"} bg-maroon-400 absolute z-0 inline-block max-w-full whitespace-pre text-transparent`}
            ref={caretRef}
          >
            {selectedText.length > 0 ? selectedText : " "}
          </span>
        )}
        {/* buffer to prevent caret from going out of view when at the end of the input */}
        <span className="flex-none whitespace-pre"> </span>
      </div>
    </label>
  );
}
