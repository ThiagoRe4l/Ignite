import { FormCoinainer, MinutesAmountInput, TaskInput } from './styles';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../../../contexts/CyclesContext';



export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <FormCoinainer>
            <label htmlFor="">Vou trabalhar em</label>
            <TaskInput 
                id="task" 
                list="task-suggestions" 
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register('task')}
            />

            <datalist id="task-suggestions">
                <option value="Projeto1" />
                <option value="Projeto2" />
                <option value="Projeto3" />
                <option value="Projeto4" />
                <option value="banana" />
            </datalist>
            
            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput 
                type="number" 
                id="minutesAmount" 
                placeholder="00" 
                step={5}
                min={5}
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormCoinainer>   
    )
}