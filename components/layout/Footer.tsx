import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div>
          <Link href="/" className="brand">
            Logan / Immtrl Dragon
          </Link>
          <p>Learning through the products I build.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <a href="https://github.com/logan9e7">GitHub →</a>
        </nav>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
