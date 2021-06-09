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
          <div className="notaff">
            Not affiliated with the Grateful Dead organization in any way.
          </div>
          <div className="contact">
            Comments? Suggestions? Errors?
            <br />
            DeadQL2021 (AT) gmail com
          </div>
        </div>
      </footer>
    </div>
  );
}
