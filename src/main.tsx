import './global.css';
import { useEffect, useState } from 'jinx';
import Background from './Background';
import Intro from './Intro';
import Home from './Home';

const INTRO_DELAY_MS = 5000;
const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
      console.log('wtf?');
      setTimeout(() => {
      console.log('yo?');
      setShowIntro(false);
    }, INTRO_DELAY_MS);
  }, []);

  return (
    <>
      {showIntro ? (
        <Intro delayMs={INTRO_DELAY_MS} />
      ) : (
        <>
          <Background />
          <Home />
        </>
      )}
    </>
  );
};

document.querySelector<HTMLDivElement>('body')!.append(<App />);
