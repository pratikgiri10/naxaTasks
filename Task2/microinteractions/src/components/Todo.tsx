import TodoForm from './TodoForm'

const Todo = () => {
  return (
    <div className='bg-slate-800 w-full h-screen flex flex-col justify-center items-center gap-6 '>
        <h1 className='text-5xl font-semibold text-white '>Todo-List</h1>
        <TodoForm />

    </div>
  )
}

export default Todo