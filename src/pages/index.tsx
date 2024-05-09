import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sekvens</title>
        <meta name="description" content="Jogo de memorização de sequência." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sekvens</h1>
        <p>Um jogo de memorização de sequência</p>
      </main>
    </>
  )
}
