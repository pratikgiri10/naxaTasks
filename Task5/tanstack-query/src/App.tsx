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
  <div className='min-h-screen px-12 py-10'>
    <h1 className='text-xl text-red-500 text-center'>Tanstack Query</h1>
   <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
    {data?.map((list: List) => (
      <tr>
          <td>{list.id}</td>
          <td>{list.name}</td>
          <td>{list.username}</td>
          <td>{list.email}</td>
          <td>{list.address.street}</td>
      </tr>
      //  <div key={list.username} className="flex gap-4 items-center">
      //     <h1>{list.id}</h1>
      //     <h1>{list.name}</h1>
      //     <h1>{list.username}</h1>
      //     <h1>{list.email}</h1>
      //     <h1>{list.address.street}</h1>
      //  </div>
      ))}
    </tbody>
   </table>
   
  </div>
  )
}

export default App
