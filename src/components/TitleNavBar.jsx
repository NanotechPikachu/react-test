import "../css/styles.css";

export default function TitleNavBar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-8 border-b border-primary-color shadow-md z-10 bg-white/30" style={{ backdropFilter: "blur(64px)" }}>
        <p className="font-bold text-left text-sky-600 hover:text-amber-700 text-xl font-sans">
          Nanotech Wiki
        </p>
      </nav>
    </div>
  );
}
