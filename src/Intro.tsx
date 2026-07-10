import './Intro.css';
import { useEffect, useRef, useState } from 'jinx';

const NOW = new Date();
// const TITLE = 'LOAD OR51.CA';
// const AUDIO_CONTEXT = new AudioContext();

export function Intro() {
  // console.log('audio', AUDIO_CONTEXT);
  // const bluetooth = navigator.bluetooth;
  // console.log('bluetooth', bluetooth);
  // const connection = navigator.connection;
  // console.log('connection', connection);
  // const [geolocation, setGeolocation] = useState<GeolocationPosition>();
  // navigator.geolocation.getCurrentPosition((res) => {
  //   // console.log('geolocation', res);
  //   setGeolocation(res);
  // });
  // const hardware = navigator.hardwareConcurrency;
  // console.log('hardware', hardware);
  // const language = navigator.language;
  // console.log('language', language);
  // const languages = navigator.languages;
  // console.log('languages', languages);
  // const online = navigator.onLine;
  // console.log('online', online);
  // const preferences = navigator.preferences;
  // console.log('preferences', preferences);
  // const usb = navigator.usb;
  // console.log('usb', usb);
  // const history = window.history;
  // console.log('history', history);
  // const battery = navigator.getBattery().then((res) => {
  // console.log('battery', res);
  // });
  // const gamepads = navigator.getGamepads();
  // console.log('gamepads', gamepads);

  const userAgent = navigator.userAgent;
  const [cx, setCx] = useState(16);
  const [cy, setCy] = useState(8);
  const [lines, setLines] = useState<string[]>([]);
  const [prompt, setPrompt] = useState('');
  const [lastInput, setLastInput] = useState('');

  const lastUpdate = useRef(0);
  const raf = useRef(0);
  useEffect(() => {
    const update = (time: number) => {
      const delta = time - lastUpdate.current;
      if (delta > 1000 / 60) {
        setCx((value) => (value <= 0 ? 24 : value - 0.005));
        setCy((value) => (value >= 24 ? 0 : value + 0.005));
        lastUpdate.current = time;
      }
      raf.current = requestAnimationFrame(update);
    };
    raf.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      const inputs = [];
      if (ev.altKey) {
        inputs.push('ALT');
      }
      if (ev.ctrlKey) {
        inputs.push('CTRL');
      }
      if (ev.metaKey) {
        inputs.push('CMD');
      }
      if (ev.shiftKey) {
        inputs.push('SHIFT');
      }

      if (/^.$/u.test(ev.key)) {
        // `key` matches a single unicode character
        inputs.push(ev.key);
        setPrompt((value) => value + ev.key);
      }

      if (ev.key === 'Backspace') {
        inputs.push(ev.key);
        setPrompt((value) => value.substring(0, value.length - 1));
      }

      if (ev.key === 'Enter') {
        inputs.push(ev.key);
        setPrompt('');
        setLines((value) => [...value, `Unknown command: ${prompt}`]);
      }

      setLastInput(inputs.join('+'));
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [prompt]);

  return (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        fontFamily: 'monospace',
        fontSize: '12px',
        gridTemplateColumns: '9fr 3fr',
      }}
      onClick={() => {
        if ('vibrate' in navigator) {
          navigator.vibrate([
            100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100,
            30, 100,
          ]); // Vibrate 'SOS' in Morse.
        }
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
          <div>
            Jonathon Orsi v39.{Math.round((10 * (NOW.getMonth() + 1)) / 12)}
          </div>
          <div>Copyright (C) 1986-{NOW.getFullYear()}</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>
            <marquee>Currently under construction!</marquee>
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          {/* <div>
            Detecting location: ({geolocation?.coords.latitude.toFixed(6)},{' '}
            {geolocation?.coords.longitude.toFixed(6)})
          </div> */}
          <div>Detecting timezone: UTC-{NOW.getTimezoneOffset() / 60}</div>
          <div>Detecting user Agent: {userAgent}</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <ul style={{ listStyle: 'none', margin: '0' }}>
            {lines.map((line) => (
              <li
                style={{
                  wordBreak: 'break-all',
                  margin: '0',
                }}
              >
                {line}
              </li>
            ))}
          </ul>
          <div
            style={{
              wordBreak: 'break-all',
            }}
          >
            <span>$</span>
            <span style={{ marginLeft: '.3em' }}>{prompt}</span>
            <span class="cursor">█</span>
          </div>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 24 24"
        >
          <defs>
            <mask id="crescent">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              <circle fill="black" r="6" cx={cx} cy={cy} />
            </mask>
          </defs>
          <circle fill="white" r="6" cx="12" cy="12" mask="url(#crescent)" />
        </svg>
        <div style={{ marginTop: 'auto' }}>
          <div>Last Input: {lastInput}</div>
          <div>{NOW.toLocaleDateString()}-JX3P,UOFT008-2013-GB16-OCAD2022</div>
        </div>
      </div>
    </div>
  );
}
