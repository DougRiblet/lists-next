import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div className="layout-container">
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <link rel="shortcut icon" href="/stealie-favicon.ico" />
      </Head>
      <header>
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
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="fbar">
          Not affiliated with the Grateful Dead organization in any way.
        </div>
      </footer>
    </div>
  );
}
