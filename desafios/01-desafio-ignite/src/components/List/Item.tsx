// Importa os ícones Trash e Check do pacote 'phosphor-react'
import { Trash, Check } from 'phosphor-react';

// Importa a interface ITask do arquivo App.tsx
import { ITask } from '../../App';

// Importa os estilos CSS do módulo 'Item.module.css'
import styles from './Item.module.css';

// Define a interface Props para especificar as propriedades esperadas
interface Props {
  data: ITask; // Dados da tarefa a ser exibida
  removeTask: (id: number) => void; // Função para remover a tarefa pelo ID
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void; // Função para alternar o status da tarefa
}

// Define e exporta a função 'Item' como um componente funcional React
export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  // Função para alternar o status da tarefa
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked }); // Chama a função toggleTaskStatus com o ID da tarefa e o novo valor do status
  }

  // Função para remover a tarefa
  function handleRemove() {
    removeTask(data.id); // Chama a função removeTask com o ID da tarefa
  }

  // Determina a classe CSS para o estilo do checkbox baseado no estado isChecked da tarefa
  const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked'];

  // Determina a classe CSS para o estilo do parágrafo baseado no estado isChecked da tarefa
  const paragraphCheckedClassname = data.isChecked
    ? styles['paragraph-checked']
    : '';

  return (
    // Renderiza um div com a classe CSS 'container' para o item da lista
    <div className={styles.container}>
      <div>
        {/* Label para o checkbox */}
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          {/* Input do tipo checkbox somente leitura, com o estado checked baseado em data.isChecked */}
          <input readOnly type="checkbox" checked={data.isChecked} />
          {/* Span para o estilo do checkbox */}
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {/* Renderiza o ícone de Check se a tarefa estiver marcada */}
            {data.isChecked && <Check className={styles.icon1} size={12} />}
          </span>

          {/* Parágrafo para exibir o texto da tarefa, com classes de estilo condicionais */}
          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text} {/* Texto da tarefa */}
          </p>
        </label>
      </div>

      {/* Botão para remover a tarefa, com evento onClick para chamar a função handleRemove */}
      <button onClick={handleRemove}>
        {/* Ícone de Trash para representar a remoção da tarefa */}
        <Trash className={styles.icon} size={24}  />
      </button>
    </div>
  );
}