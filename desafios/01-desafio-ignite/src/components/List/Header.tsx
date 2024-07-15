import styles from './Header.module.css';

// Define a interface Props para especificar as propriedades esperadas
interface Props {
  tasksCounter: number; // Contador de tarefas criadas
  checkedTasksCounter: number; // Contador de tarefas concluídas
}

// Define e exporta a função 'Header' como um componente funcional React
export function Header({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    // Renderiza um elemento <header> com a classe CSS 'container' definida pelos estilos importados
    <header className={styles.container}>
      {/* Primeiro aside */}
      <aside>
        <p>Tarefas criadas</p> {/* Texto estático */}
        <span>{tasksCounter}</span> {/* Mostra o número de tarefas criadas */}
      </aside>

      {/* Segundo aside */}
      <aside>
        <p>Concluídas</p> {/* Texto estático */}
        <span>
          {tasksCounter === 0 // Verifica se não há tarefas criadas
            ? tasksCounter // Se não há, mostra 0
            : `${checkedTasksCounter} de ${tasksCounter}`} {/* Mostra a quantidade de tarefas concluídas de um total */}
        </span>
      </aside>
    </header>
  );
}