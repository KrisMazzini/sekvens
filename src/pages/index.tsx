import Head from 'next/head'

import { Header } from '@/components/Header'
import { NewPlayer } from '@/components/NewPlayer'

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
        <Header />

        <NewPlayer index={0} amountOfPlayers={3} />
        <NewPlayer index={1} amountOfPlayers={3} />
        <NewPlayer index={2} amountOfPlayers={3} />
      </main>
    </>
  )
}
