import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div className="layout-container">
      <Head>
        <meta charSet="UTF-8" key="charset" />
      </Head>
      <header>
        <nav>
          {home ? (
            <div className="nbar">
              Dead<span className="logo-ql">QL</span>
            </div>
          ) : (
            <div className="nbar">
              <Link href="/">
                <a>
                  Dead<span className="logo-ql">QL</span>
                </a>
              </Link>
            </div>
          )}
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  );
}
