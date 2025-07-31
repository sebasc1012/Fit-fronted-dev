
export default async function  UserComponent() {

  const res = await fetch("http://localhost:4000/api/users'")
  const data = await res.json()

  return (
    <div>
      <ul>
        {data?.map((user:any)=> (
        <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}