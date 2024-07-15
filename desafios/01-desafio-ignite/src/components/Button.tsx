import styles from './Button.module.css'

// Define um tipo 'Props' que inclui todas as propriedades válidas para um elemento <button> HTML
type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>, // Define as propriedades permitidas para o componente
  HTMLButtonElement // Define o tipo de elemento HTML
>

export function Button({ children, ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}