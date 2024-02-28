import '../css/styles.css';

export default function Card({ title, children }) {
  return (
    <div className="border w-96 p-5 m-5 bg-zinc-900 backdrop-blur overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-white whitespace-normal">{title}</h2>
      {children}
    </div>
  );
}