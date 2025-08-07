"use client";

import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { SubmitHandler, useForm } from "react-hook-form";

export function CreateUser() {
  interface createUserForm {
    name: string;
    email: string;
    password: string;
  }

  const { handleSubmit, register, reset } = useForm<createUserForm>();

  const onSubmit: SubmitHandler<createUserForm> = async (data) => {
    if(!data.email || !data.password || !data.name) return
    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error(err);
    }
reset()
  };

  return (
    <Card className="w-full max-w-sm text-black">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
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
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Name</Label>
              </div>
              <Input {...register("name", {required:true})} id="name" type="text" required />
            </div>
          </div>
        <Button variant="outline" type="submit" className="w-full">
          Create
        </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
      </CardFooter>
    </Card>
  );
}
