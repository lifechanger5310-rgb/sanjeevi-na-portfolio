/** Page depth: faint drifting grid, a vignette that fades it out, and a light noise grain. CSS only (see globals.css). */
export default function Backdrop() {
  return (
    <div aria-hidden="true">
      <div className="fx-grid" />
      <div className="fx-vignette" />
      <div className="fx-noise" />
    </div>
  );
}
