import "../css/styles.css";

export default function TitleNavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex py-4 px-8 border-b border-primary-color shadow-md z-10 backdrop-filter backdrop-blur-2xl opacity-60">
      <p className="font-bold text-left text-sky-600 hover:text-amber-700 text-xl font-sans">
        Nanotech Wiki
      </p>
    </nav>
  );
}
