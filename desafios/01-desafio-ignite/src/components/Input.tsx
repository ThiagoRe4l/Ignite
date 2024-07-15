import styles from './Input.module.css';

export function Input({
    ...rest
}: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, // Define as propriedades permitidas para o componente
    HTMLInputElement // Define o tipo de elemento HTML
>) {
    return (
        <input 
            className={styles.input}
            placeholder="Adicione uma nova tarefa"
            {...rest}
        />
    )
}