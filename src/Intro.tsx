import './Intro.css';
import { useEffect, useRef, useState } from 'jinx';

const TARGET = 'Jon Orsi';

interface IntroProps {
  delayMs: number;
}
export default function Intro({ delayMs = 5000 }: IntroProps) {
  const typingRef = useRef<HTMLSpanElement>();
  const [index, setIndex] = useState(0);
  const [letters, setLetters] = useState('');

  const raf = useRef();
  const lastUpdate = useRef(0);
  const update: FrameRequestCallback = (time) => {
    let nextValue = 0;
    if (time - lastUpdate.current > 250) {
      lastUpdate.current = time;
      setIndex((value) => {
        nextValue = value + 1;
        setLetters(TARGET.slice(0, nextValue));
        return nextValue;
      });
    }

    if (nextValue === TARGET.length) {
      cancelAnimationFrame(raf.current);
    } else {
      requestAnimationFrame(update);
    }
  };

  useEffect(() => {
    if (typingRef.current && raf.current == null) {
      raf.current = requestAnimationFrame(update);
      return () => {
        cancelAnimationFrame(raf.current);
      };
    }
  }, [index]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        zIndex: '1',
      }}
    >
      <div
        style={{
          display: 'grid',
          width: '100%',
          height: '100%',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            border: '1px solid grey',
            borderRadius: 'var(--spacing-1)',
            fontFamily: 'courier new',
            padding: '4px 8px',
            width: '200px',
          }}
        >
          <span ref={typingRef}>{letters}</span>
          <span
            style={{
              backgroundColor: 'transparent',
              display: 'inline-block',
              height: '100%',
              width: '2px',
              animation: 'blinking 1250ms ease infinite alternate',
            }}
          ></span>
        </span>
      </div>
    </div>
  );
}
