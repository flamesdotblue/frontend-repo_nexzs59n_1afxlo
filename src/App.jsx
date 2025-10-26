import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import LessonHighlights from "./components/LessonHighlights";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <FeatureGrid />
      <LessonHighlights />
      <CallToAction />

      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-zinc-400">
        <div className="mx-auto max-w-7xl px-6">
          <p>
            © {new Date().getFullYear()} AllTimeTask.in • Learn. Create. Shine.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
