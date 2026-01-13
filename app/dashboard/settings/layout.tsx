"use client";
import DashboardHeader from "@/features/dashboard/DashboardHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname().split("/")[3];

  return (
    <div>
      <DashboardHeader>{path.toUpperCase()} SETTINGS</DashboardHeader>
      <div className=" m-10">
        <div className=" mb-6">
          <h1 className=" text-lg font-semibold">Settings</h1>
          <p className=" text-sm text-black/70">
            Manage your profile and account settings
          </p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-7">
          <div className=" flex flex-col gap-3 ">
            <Link
              className=" w-full p-2 hover:bg-stone-200"
              href={"/dashboard/settings/profile"}
            >
              Profile
            </Link>

            <Link
              className=" w-full p-2 hover:bg-stone-200"
              href={"/dashboard/settings/password"}
            >
              Password
            </Link>
            <Link className=" w-full p-2 hover:bg-stone-200" href={"#"}>
              Two-Factor Auth
            </Link>

            <Link
              className=" w-full p-2 hover:bg-stone-200"
              href={"/dashboard/settings/appearance"}
            >
              Appearance
            </Link>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
