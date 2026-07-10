import './global.css';
import { Intro } from './Intro';

document.querySelector<HTMLDivElement>('body')!.append(
  <div
    style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '24px 16px'
    }}
  >
    <Intro />
  </div>
);
