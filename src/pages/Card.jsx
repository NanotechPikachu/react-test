import '../css/styles.css';

export default function Card({ title, children }) {
  return (
    <div className="border p-5 m-5 bg-black bg-opacity-50 backdrop-blur">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}