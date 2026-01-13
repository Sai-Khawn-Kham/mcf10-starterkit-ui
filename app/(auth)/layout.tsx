import Link from "next/link";
import logo from "@/assets/logo-with-white-border.svg";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="auth-layout" className="flex min-h-svh flex-col items-center justify-center gap-9 p-9">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Link href="/" className="flex items-center gap-3 self-center font-medium">
          <div className="flex size-12 items-center justify-center">
            <Image src={logo} width={44} height={44} alt="Logo" />
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
}
