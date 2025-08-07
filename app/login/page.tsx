'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface loginType {
  email:string;
  password:string
}

export default function LoginPage () {

  const router = useRouter()

  const {register, handleSubmit, setError} =useForm<loginType>()

  const onSubmit: SubmitHandler<loginType>= async (data)=> {

    try{
      const result = await signIn('credentials', {
        email: data.email,
        password:data.password,
        redirect:false
      })
      if ( result?.error) {
        setError("root", {type:"400", message:"password or email incorrect"})
      } else {
        router.push('/user')
      }
    }catch(err){
      console.error(err);
    }


  }
  return (
    <Card className="w-full max-w-sm text-black">
    <CardHeader>
      <CardTitle>Login to your account</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
            {...register("email", {required: true})}
              id="email"
              type="email"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input {...register("password", {required: true})} id="password" type="password" required />
          </div>
        </div>
      <Button variant="outline" type="submit" className="w-full">
        Create
      </Button>
      </form>
    </CardContent>
    <CardFooter className="flex-col gap-2 ">
    </CardFooter>
  </Card>)
}