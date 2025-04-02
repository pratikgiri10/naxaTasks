import { useMutation } from "@tanstack/react-query"
import UpdateForm from "./components/UpdateForm"
import { deletePost } from "./components/ApiTodo"
import GetDetails from "./components/GetDetails"
import PostForm from "./components/PostForm"

function App() {

  const {isPending,isSuccess, isError, error, data, mutate} = useMutation({
    mutationFn: deletePost
  })
  if(isSuccess)
    console.log("deleted")

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <button
      onClick={() => mutate()} 
      className="bg-black text-white px-4 py-2 text-xl rounded-xl">Delete Post</button>
      {isPending ? <span>Loading...</span> : (isError ? <span>Error: {error.message}</span> : (data ? <span>Post Deleted</span> : null))}
      {/* <UpdateForm /> */}
      <PostForm />
      <GetDetails />

    </div>
  )
}

export default App
