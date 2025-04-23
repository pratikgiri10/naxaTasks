import { useQuery } from '@tanstack/react-query'
import { FetchData, fetchPost } from './ApiPost'
import { useDispatch } from 'react-redux'
import { getPost } from '../features/post/postSlice'
import { useNavigate } from 'react-router-dom'

const FetchPost = () => {
    const navigate = useNavigate()
    const {isPending, isError, data, error, refetch} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchPost,
        enabled: false
        
    })
    const dispatch = useDispatch()
    

       const handleClick = () => {
         refetch()
         if(data){
            dispatch(getPost(data.data))
            navigate('/getdetails')
        }
       }
  return (
    <div className='flex gap-4 items-center '>
        <button
        className="bg-black text-white px-4 py-2 text-xl rounded-xl h-fit" 
        onClick={handleClick}
        >Fetch Post</button>
    </div>
  )
}

export default FetchPost