'use client'

import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { SubmitHandler, useForm } from "react-hook-form";


export function CreateUser () {

  interface createUserForm {
    user:string;
    email:string;
    pasdwore:string;
  }


  const {handleSubmit}= useForm<createUserForm>()


  const onSubmit: SubmitHandler<createUserForm> = (data)=> {
console.log(data);

  }


    return (
      <Card className="w-full max-w-sm text-black">
        <CardHeader>
          <CardTitle >Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="name">Name</Label>
                </div>
                <Input id="name" type="text" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 ">
          <Button variant="outline" type="submit" className="w-full">
            Create
          </Button>
        </CardFooter>
      </Card>
    )
  }