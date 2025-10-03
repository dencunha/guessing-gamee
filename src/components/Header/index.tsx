import styles from "./styles.module.css"
import logo from "../../assets/logo.png"
import restar from "../../assets/restart.svg"

type Props = {
  current: number
  max: number
  onRestar: () => void
}

export function Header({ current, max, onRestar}: Props) {
  
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo" />

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button type="button" onClick={onRestar}>
          <img src={restar} alt="Ícone de reiniciar" />
        </button>
      </header>
    </div>
  )
}