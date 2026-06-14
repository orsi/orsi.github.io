import { useRef } from 'jinx';

export default function Background() {
  const ref = useRef<HTMLCanvasElement>();

  return (
    <div
      style={{
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '-1',
      }}
    >
      bg
      <canvas
        onClick={() => {
          console.log('click', ref.current);
        }}
        ref={ref}
      />
    </div>
  );
}
