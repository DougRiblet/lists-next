import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <div className="nbar">
        <Link href="/">
          <a className="logo">
            Dead<span className="logo-ql">QL</span>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;