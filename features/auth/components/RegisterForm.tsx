"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card className="py-9">
        <CardHeader className="px-15 pb-6 text-center">
          <CardTitle className="font-semibold text-xl">
            Create an account
          </CardTitle>
          <CardDescription className="text-sm">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-15">
          <form action="" method="post" className="flex flex-col gap-9">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  className="h-12 rounded-md py-3 px-4"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  className="h-12 rounded-md py-3 px-4"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="h-12 rounded-md py-3 px-4"
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password-confirm" className="text-sm font-medium">
                  Confirm password
                </Label>
                <Input
                  type="password"
                  id="password-confirm"
                  name="password-confirm"
                  placeholder="Confirm password"
                  className="h-12 rounded-md py-3 px-4"
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Checkbox id="remember" className={"size-6 rounded-sm"} />
                <Label htmlFor="remember" className="text-sm font-medium">
                  Remember me
                </Label>
              </div>
              <Button
                className={"rounded-md text-sm h-12 w-full px-6 py-3 mt-3"}
              >
                Log in
              </Button>
            </div>
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link href="/login" className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
