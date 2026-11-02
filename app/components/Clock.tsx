import { useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date("1986-10-02T09:00:00.000Z"));

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <span className="hidden sm:inline">
        {date.toLocaleDateString("default", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </span>
      <span className="sm:hidden">
        {date.toLocaleDateString("default", {
          month: "short",
          day: "numeric",
        })}
      </span>
    </>
  );
}
