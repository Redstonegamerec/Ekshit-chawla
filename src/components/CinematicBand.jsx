const rows = [
  "Strategy / Visual Direction / Premium UI / Smooth Motion / Conversion",
  "Local Businesses / Institutes / Gyms / Cafes / Interior Studios / Brands",
];

export default function CinematicBand() {
  return (
    <section className="cinematic-band" aria-label="Studio positioning">
      {rows.map((row, index) => (
        <div className="cinematic-track" data-direction={index % 2 === 0 ? "left" : "right"} key={row}>
          <span>{row}</span>
          <span aria-hidden="true">{row}</span>
        </div>
      ))}
    </section>
  );
}
