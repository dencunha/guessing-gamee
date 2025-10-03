import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"

export default function App() {

  function handleRestartGame(){
    alert("Reiniciar o jogo")
  }

  return (

    <div className={styles.container}>
      <main>
      <Header current={5} max={10} onRestar={handleRestartGame} />

      <Tip tip="Uma das linguagens de programação mais utilizadas"/>

      <div className={styles.word}>
      <Letter value="R" />
      <Letter value="e" />
      <Letter value="a" />
      <Letter value="c" />

      </div>

      <h4>Palpite</h4>
      <div className={styles.guess}>
        <Input autoFocus placeholder="?"  maxLength={1} />
        <Button title="Confirmar" />
      </div>

      <LettersUsed />

      </main>
    </div>
  )
}

