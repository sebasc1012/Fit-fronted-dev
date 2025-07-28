'use client'
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default  function  UserComponent() {

  const {data:users, error, isLoading}= useSWR('http://localhost:4000/api/users', fetcher)

  if (error) (<div>{error}</div>)
    if(isLoading)( <div>Loading...</div>)

  return (
    <div>
      <ul>
        {users?.map((user:any)=> (
        <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}