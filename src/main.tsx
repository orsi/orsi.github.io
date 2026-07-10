import './global.css';
// import Background from './Background';
// import Home from './Home';
// import { Nav } from './Nav';
import { Intro } from './Intro';

document.querySelector<HTMLDivElement>('body')!.append(
  <>
    <Intro />
    {/* <Background /> */}
    {/* <Nav /> */}
    {/* <Home /> */}
  </>
);
