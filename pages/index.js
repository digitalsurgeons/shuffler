import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div>
    <Head>
      <title>Shuffler</title>
    </Head>

    <div className="content">
      <p>Welcome to Shuffler!</p>
      <Link href="/random">
        <button className="btn" href="#">Get Started</button>
      </Link>
    </div>

    <style jsx>{`
      .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: Menlo;
        height: 100vh;
        justify-content: center;
        width: 100vw;
      }

      .btn {
        background: #ddd;
        border-radius: 4px;
        color: #000;
        font-family: Menlo;
        margin-top: 10px;
        outline: none;
        padding: 10px 20px;
      }
    `}</style>
  </div>
)

export default Home
