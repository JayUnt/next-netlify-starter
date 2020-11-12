import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Header from '@components/Header'
import ContactForm from '@components/ContactForm';

export default function Contact() {
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <Head>
        <title>Next.js Farter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>This is the count: {count}</div>
        <button onClick={() => { setCount(count + 1) }}>
          Add
        </button>
        <button onClick={() => { setCount(count - 1) }}>
          Subtract
        </button>

        <ContactForm />
      </main>

    </div>
  )
}
