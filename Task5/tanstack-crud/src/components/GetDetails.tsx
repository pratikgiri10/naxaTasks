import { useQuery } from '@tanstack/react-query'
import { FetchData, fetchPost } from './ApiTodo'

const GetDetails = () => {
    const {isPending, isError, data, error, refetch} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchPost,
        enabled: false
        
    })

       
  return (
    <div>
        <button 
        onClick={() => refetch()}
        >Fetch Post</button>
        {isPending ?  <span>Loading...</span>: (isError ? <span>Error: {error.message}</span> : (
            <div className='flex flex-col gap-10 justify-center items-start'>
            {data.data.map((post: FetchData) => (
             <div key={post.id} className='flex justify-between gap-10 items-center'>
                 <h1>Id: {post.id}</h1>
                 <h1>User Id: {post.userId}</h1>
                 <h1>Title: {post.title}</h1>
                 <h1>Body: {post.body}</h1>
             </div>
            ))}
     </div>
        ))}
    </div>
  )
}

export default GetDetails