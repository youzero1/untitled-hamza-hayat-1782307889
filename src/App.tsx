import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Placeholder() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-caramel">Maison Lune</p>
        <h1 className="mt-4 text-4xl font-semibold text-cocoa">Artisan bakery — coming alive…</h1>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Placeholder />} />
      </Routes>
    </BrowserRouter>
  );
}
