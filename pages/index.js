import Head from 'next/head'
import Link from 'next/link';
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Farter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my demo!" />
        <p className="description">
          Get started by clicking our conact page:
          <Link href="/contact">
            <a>Click here!!!</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
