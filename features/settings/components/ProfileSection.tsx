import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileSection() {
  return (
    <section>
      <div>
        <h1 className=" text-lg font-semibold">Profile information</h1>
        <p className=" text-sm text-black/70">
          Update your name and email address
        </p>
        <form className=" flex flex-col gap-4 mt-4">
          <div>
            <Label htmlFor="name" className=" text-base mb-1">
              Name
            </Label>
            <Input
              className=" border-2 p-4"
              placeholder="Name"
              id="name"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="email" className=" text-base mb-1">
              Email Address
            </Label>
            <Input
              className=" border-2 p-4"
              placeholder="Email"
              id="email"
              type="email"
            />
          </div>

          <div>
            <Button className={" p-5 text-md"}>Save</Button>
          </div>
        </form>
      </div>
      <div className=" mt-5">
        <h1 className=" text-lg font-semibold">Delete account</h1>
        <p className=" text-sm text-black/70">
          Delete your account and all of its resources
        </p>
        <div className=" p-4 bg-red-900 text-white mt-5">
          <h1 className=" text-lg font-semibold">Warning</h1>
          <p className=" text-sm text-white">
            Please proceed with caution, this cannot be undone
          </p>

          <Button className={"bg-red-400 text-white mt-3 p-5"}>
            Delete Account
          </Button>
        </div>
      </div>
    </section>
  );
}
