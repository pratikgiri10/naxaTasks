import { useQuery } from "@tanstack/react-query"

const fetchLists = async () => {
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
  } catch (error) {
    console.log('something went wrong', error)
    return error
  }
} 

function App() {
// states:
// isPending or status === 'pending'
// isError or state === 'error'
// isSuccess ...
//error, data, isFetching ...
interface Geo {
  lat: string,
  lon: string
}
interface Address {
  city: string,
  geo: Geo,
  street: string,
  suite: string,
  zipcode: string
}
interface List {
  id: number,
  name: string,
  username: string,
  email: string
  address: Address
 
}

  const {isPending, isError, data, error} = useQuery({queryKey: ['lists'], queryFn: fetchLists})

  if(isPending)
    return <span className="text-red-500 text-2xl text-center">Loading...</span>
  
  if(isError)
    return <span className="text-red-500 text-2xl text-center">Error: {error.message}</span>
  
  if(data)
    console.log(data)

  return (
    <div className="min-h-screen px-12 py-10 bg-gray-100">
    <h1 className="text-2xl font-semibold text-red-500 text-center mb-6">Tanstack Query</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">Id</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Username</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Address</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {data?.map((list: List) => (
            <tr key={list.id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
              <td className="py-3 px-6">{list.id}</td>
              <td className="py-3 px-6">{list.name}</td>
              <td className="py-3 px-6">{list.username}</td>
              <td className="py-3 px-6">{list.email}</td>
              <td className="py-3 px-6">{list.address.street}, {list.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default App
