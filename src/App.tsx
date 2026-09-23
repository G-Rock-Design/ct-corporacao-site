import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Structure } from './sections/Structure';
import { Health } from './sections/Health';
import { Team } from './sections/Team';
import { Personal } from './sections/Personal';
import { Gallery } from './sections/Gallery';
import { Pricing } from './sections/Pricing';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-brand-black antialiased selection:bg-brand-red selection:text-white bg-brand-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Structure />
        <Health />
        <Team />
        <Personal />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
