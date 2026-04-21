import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiNodedotjs } from 'react-icons/si';
import LogoLoop from './components/LogoLoop';
import './App.css';

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiVite />, title: 'Vite', href: 'https://vite.dev' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org' },
];

function App() {
  return (
    <div className="app">
      <h1>LogoLoop Demo</h1>

      <section className="demo-section">
        <h2>Horizontal loop (left, fade, scale on hover)</h2>
        <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Technology stack"
          />
        </div>
      </section>

      <section className="demo-section">
        <h2>Horizontal loop (right, slower)</h2>
        <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="right"
            logoHeight={48}
            gap={48}
            hoverSpeed={10}
            fadeOut
            ariaLabel="Technology stack reversed"
          />
        </div>
      </section>

      <section className="demo-section vertical-demo">
        <h2>Vertical loop (up)</h2>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="up"
            logoHeight={48}
            gap={32}
            hoverSpeed={0}
            fadeOut
            ariaLabel="Technology stack vertical"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
