import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ComputerIcon, MonitorIcon, MoonIcon, SunIcon } from "lucide-react";

export default function AppearanceSection() {
  return (
    <section>
      <h1 className=" font-semibold">Appearance settings</h1>
      <p className=" text-sm text-black/70 dark:text-white">
        Update your account's appearance settings
      </p>

      <ToggleGroup
        type="single"
        defaultValue={"c"}
        className=" mt-5 flex justify-between items-center gap-1.5 bg-gray-300 dark:bg-gray-700 p-1 "
      >
        <ToggleGroupItem value="a" className="text-md">
          <SunIcon /> Light
        </ToggleGroupItem>
        <ToggleGroupItem value="b" className="text-md">
          <MoonIcon /> Dark
        </ToggleGroupItem>
        <ToggleGroupItem value="c" className="text-md">
          <MonitorIcon /> System
        </ToggleGroupItem>
      </ToggleGroup>
    </section>
  );
}
