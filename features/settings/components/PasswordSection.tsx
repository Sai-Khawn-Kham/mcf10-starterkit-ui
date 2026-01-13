import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PasswordSection() {
  return (
    <section>
      <h1 className=" text-lg font-semibold">Update password</h1>
      <p className=" text-sm text-black/70">
        Ensure your account is using a long, random password to stay secure
      </p>
      <form className=" flex flex-col gap-4 mt-4">
        <div>
          <Label htmlFor="current" className=" text-base mb-1">
            Current Password
          </Label>
          <Input
            className=" border-2 p-4"
            placeholder="Current Password"
            id="current"
            type="password"
          />
        </div>
        <div>
          <Label htmlFor="new" className=" text-base mb-1">
            New Password
          </Label>
          <Input
            className=" border-2 p-4"
            placeholder="New Password"
            id="new"
            type="password"
          />
        </div>
        <div>
          <Label htmlFor="confirm" className=" text-base mb-1">
            Confirm Password
          </Label>
          <Input
            className=" border-2 p-4"
            placeholder="Confirm Password"
            id="confirm"
            type="password"
          />
        </div>
        <div>
          <Button className={" p-5 text-md"}>Save Password</Button>
        </div>
      </form>
    </section>
  );
}
