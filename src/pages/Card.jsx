import '../css/styles.css';

export default function Card({ title, children }) {
  return (
    <div className="border md:w-96 p-5 m-5 bg-zinc-900 backdrop-blur overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-white whitespace-pre-line">{title}</h2>
      <div className="whitespace-pre-line text-white">{children}</div>
    </div>
  );
}