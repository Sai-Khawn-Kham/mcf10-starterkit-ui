"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AppearanceSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeOptions = [
    {
      title: "light",
      icon: SunIcon,
    },
    {
      title: "dark",
      icon: MoonIcon,
    },
    {
      title: "system",
      icon: MonitorIcon,
    },
  ];

  if (!mounted) return null;

  return (
    <section>
      <h1 className=" font-semibold">Appearance settings</h1>
      <p className=" text-sm text-black/70 dark:text-white">
        Update your account's appearance settings
      </p>

      <div className="mt-5 inline-flex justify-between items-center gap-2 bg-gray-300 dark:bg-gray-700 p-1">
        {themeOptions.map((item) => (
          <Button
            key={item.title}
            onClick={() => setTheme(item.title)}
            className={cn(
              "text-md p-5",
              theme === item.title
                ? "bg-gray-200 text-black dark:bg-gray-600 dark:text-white"
                : "bg-gray-300 text-gray-500 dark:bg-gray-700"
            )}
          >
            <div className="flex items-center gap-2">
              <item.icon /> <span className=" capitalize">{item.title}</span>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
}
