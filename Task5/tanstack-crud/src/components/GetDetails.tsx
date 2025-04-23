import { useQuery } from '@tanstack/react-query'
import { FetchData, fetchPost } from './ApiPost'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const GetDetails = () => {
   const data = useSelector((state: RootState) => state.post.post)
   console.log(data)

       
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border text-left">Id</th>
          <th className="p-2 border text-left">User Id</th>
          <th className="p-2 border text-left">Title</th>
          <th className="p-2 border text-left">Body</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post) => (
          <tr key={post.id} className="border-b hover:bg-gray-50">
            <td className="p-2 border">{post.id}</td>
            <td className="p-2 border">{post.userId}</td>
            <td className="p-2 border">{post.title}</td>
            <td className="p-2 border">{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default GetDetails