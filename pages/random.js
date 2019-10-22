import { useEffect, useState } from 'react'
import Head from 'next/head'
import Btn from '../components/btn'
import data from '../lib/data.json'

function Random() {
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    window.addEventListener('keypress', onKeyPress)
    window.addEventListener('click', onClick)
  }, [])

  function pick() {
    return data.options[Math.floor(Math.random() * data.options.length)]
  }

  function onKeyPress(e) {
    e.preventDefault()

    if (e.keyCode === 32) {
      choose()
    }
  }

  function onClick(e) {
    e.preventDefault()
    choose()
  }

  function choose() {
    setChosen(pick())
    window.removeEventListener('keypress', onKeyPress)
    window.removeEventListener('click', onClick)
  }

  let content = <><p>Hit spacebar or tap anywhere, if you dare...</p><img style={{ width: '50px' }} src="/spinner.gif" /></>

  if (chosen) {
    content = <><p>"{ chosen }"</p><Btn href="/" label="Start Again" /></>
  }

  return (
    <div>
      <Head>
        <title>Shuffler</title>
      </Head>

      <div className="content">
        { content }
      </div>

      <style jsx>{`
        .content {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          font-family: Menlo;
          height: 100vh;
          justify-content: center;
          line-height: 1.5;
          padding: 0 20px;
          text-align: center;
          width: 100vw;
        }

        .loading {
          width: 50px;
        }
      `}</style>
    </div>
  )
}

export default Random
