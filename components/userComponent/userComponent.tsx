
export default async function  UserComponent() {

  const res = await fetch("http://localhost:4000/api/users")
  const data = await res.json()
  console.log(data);
  

  return (
    <div>
      <ul>
        {data?.map((user:any)=> (
        <div key={user.id}>
          <li >{user.name}</li>
          <li>{user.email}</li>
        </div>
        ))}
      </ul>
    </div>
  )
}