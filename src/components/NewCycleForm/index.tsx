import { useForm } from "react-hook-form";
import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

interface ICycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishDate?: Date
  }

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(1, 'O ciclo dever ser no mínimo 5min.')
      .max(60, 'O ciclo deve ser no máximo 60min.'),
  })
  
  type NewCyclefFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {

    const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCyclefFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 5,
      },
    })

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                type="text"
                id="task"
                disabled={!!activeCycle}
                placeholder="Dê um nome para o seu projeto"
                {...register('task')}
            />
            <label htmlFor="minutesAmount">Durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                disabled={!!activeCycle}
                placeholder="00"
                step={1}
                {...register('minutesAmount', { valueAsNumber: true })}
            />
            <span>minutos.</span>
        </FormContainer>
    )

)