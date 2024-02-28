import '../css/styles.css';

export default function Card({ title, children }) {
  return (
    <div className="border p-5 m-5 bg-zinc-900 backdrop-blur">
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      {children}
    </div>
  );
}