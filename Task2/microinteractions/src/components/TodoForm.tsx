import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {addTodo, fetchTask} from '../features/action'
import { Todo, Task } from '../features/types'
import { useSelector } from 'react-redux'

type Inputs = {
    tasks: string
}
const TodoForm = () => {
  const dispatch = useDispatch()
  const task = useSelector((state: Todo) => state.tasks)
  // console.log(data)
    const [isChecked, setIsChecked] = useState<{ [key: number]: boolean }>({})
    const [todos, setTodos] = useState<Task[]>()
    const {register, handleSubmit, reset, formState: {errors, isSubmitSuccessful}} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
     
      dispatch(addTodo({text: data.tasks}))   
    }
    const checkHandler = (index: number) => {
        setIsChecked((prev) => ({
            ...prev,
            [index]: !prev[index],
          }))
    }
    const handleFetch = () => {
      dispatch(fetchTask())
      // setTodos(task)
    }
    useEffect(() => {      
      setTodos(task)
        reset({tasks: ""})
    }, [isSubmitSuccessful])
  return (
    <div className='bg-white px-8 py-4 rounded-xl'>
        <form 
        onSubmit={handleSubmit(onSubmit)}>
    <div className='flex justify-between items-center gap-6'>
    <input 
    className='border-2 border-gray-500 px-6 py-3 rounded-xl'
    type="text" {...register('tasks', {
        required: 'please write to add the tasks'
    })}/>
    
    <input 
    className='bg-slate-800 text-white px-6 py-3 rounded-xl text-xl cursor-pointer duration-300 hover:opacity-90 active:scale-90 transition ease-in-out'
    type="submit" value="Add" />
    </div>
    {errors.tasks?.message && <span className="text-red-500 text-sm mt-1">{errors.tasks.message}</span>}
   </form>
   <button 
    className='mt-4 bg-slate-800 text-white px-6 py-3 rounded-xl text-xl cursor-pointer duration-300 hover:opacity-90 active:scale-90 transition ease-in-out'
    onClick={handleFetch}
     >Fetch</button>
   {/* {todos.length < 1 && (<p className='mt-4 text-center text-slate-700'>You don't have any tasks to do. Add tasks</p>)} */}
   {todos?.map((todo, index) => (  
    <div key={index} className='mt-4 flex items-center gap-2'>
    
        <input       
        onChange={() => checkHandler(index)}
        type="checkbox" name="task" id={`task-${index}`} checked={!!isChecked[index]}/>
        <p className={`text-slate-700  ${isChecked[index] ? 'line-through': ''}`}>{todo.text}</p>
    </div>
   
   ))}
    </div>
   
  )
}

export default TodoForm