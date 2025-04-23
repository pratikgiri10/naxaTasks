import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { updatePost } from "./ApiPost"

export interface UpdateInputs {
    id: number | null,
    userId: number | null,
    title: string,
    body: string
}
const UpdateForm = () => {
    const {register, handleSubmit, reset, formState: {isSubmitSuccessful}} = useForm<UpdateInputs>()
    const mutation = useMutation({
        mutationFn: (data: UpdateInputs) => updatePost(data)
    })
    const onSubmit: SubmitHandler<UpdateInputs> = (data) => {
        console.log(data)
        mutation.mutate(data)
    }
   
    useEffect(() => {
        if (mutation.isSuccess) {
           reset({
            id: null,
            userId: null,
            title: '',
            body: ''
           })
          }
    }, [isSubmitSuccessful, mutation.data])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
            <input  
            className="border-1 px-4 py-2 "
            type="number" placeholder='id' {...register('id')}/>
            <input 
            className="border-1 px-4 py-2 "
            type="number" placeholder='userId' {...register('userId')}/>
            <input 
            className="border-1 px-4 py-2 "
            type="text" placeholder='title' {...register('title')}/>
            <input 
            className="border-1 px-4 py-2 "
            type="text" placeholder='body' {...register('body')}/>
            <input 
            className="bg-black text-white px-4 py-2 text-xl rounded-xl"
            type="submit" value="Update Post" />
        </div>
    </form>
  )
}

export default UpdateForm