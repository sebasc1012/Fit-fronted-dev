import { CreateUser } from "@/components/createUser/CreateUser";
import UserComponent from "@/components/userComponent/userComponent";

export default function HomePage () {

  return(
    <div>
      <h1>List of users</h1>
      <div>
      {/* <UserComponent/> */}
      </div>
      <CreateUser/>
      </div>
  )
}