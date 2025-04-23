import { SubmitHandler, useForm } from "react-hook-form"
import { createPost } from "./ApiPost"
import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
export type Inputs = {
    task: string,
   
}

const PostForm = () => {
    const {register, handleSubmit, reset, formState: {isSubmitSuccessful}} = useForm<Inputs>()
    const {isPending, isError,isSuccess, data, error, mutate} = useMutation({
        mutationFn: (data: Inputs) => createPost(data)
      })
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log('onsumbit')
        mutate(data)
   
    
    }
    useEffect(() => {
      if(isSuccess){
        reset({task: ''})
      }
      
    },[data, isSubmitSuccessful])
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex flex-col gap-4">
         <input 
         className="border-1 px-4 py-2 "
         type="text"  placeholder="create post" {...register('task', {required: true})}/>
         <input className="bg-black text-white px-4 py-2 text-xl rounded-xl" type="submit" value="Create Post" />
        </div>
        
    </form> 
      {isError ? <span className="text-red-500 text-sm ">Error: {error.message}</span> : (data ? <span>Posts added</span> : null)       
    }
   
    </div>
    
  )
}

export default PostForm