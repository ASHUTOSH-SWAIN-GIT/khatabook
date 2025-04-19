// app/page.tsx
"use client";

import { GridPattern } from "@/components/magicui/grid-pattern";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  IconHome,
  IconEdit,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconMoon,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Book,UserPlus } from "lucide-react"; 
// import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Button } from "@/components/ui/button";
export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Grid Pattern as Background */}
      <GridPattern width={40} height={40} className="text-gray-200 bg-black z-0" />

      {/* Dock Navigation */}
      <Dock direction="bottom" className="z-50">
        <DockIcon onClick={() => router.push("/")} className="bg-black/30">
          <IconHome className="h-6 w-6 text-white" />
        </DockIcon>
        <DockIcon onClick={() => router.push("/about")} className="bg-black/30">
          <Book className="h-6 w-6 text-white" />
        </DockIcon>
        <DockIcon onClick={() =>router.push("/auth")} className="bg-black/30">
          <UserPlus className="h-6 w-6 text-white" />
        </DockIcon>
        <div className="h-10
         border-l border-gray-600"></div>
        <DockIcon onClick={() => window.open("https://linkedin.com", "_blank")} className="bg-black/30">
          <IconBrandGithub className="h-6 w-6 text-white" />
        </DockIcon>
        <DockIcon onClick={() => window.open("https://x.com", "_blank")} className="bg-black/30">
          <IconBrandX className="h-6 w-6 text-white" />
        </DockIcon>
        <DockIcon onClick={() => router.push("/contact")} className="bg-black/30">
          <IconMail className="h-6 w-6 text-white" />
        </DockIcon>
        <div className="h-10
         border-l border-gray-600"></div>
        <DockIcon onClick={() => console.log("Toggle dark mode")} className="bg-black/30">
          <IconMoon className="h-6 w-6 text-white" />
        </DockIcon>
      </Dock>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pb-20">
      <h1 className="text-4xl font-bold">
        Welcome to My App
      </h1>
      <Button className="bg-white rounded-lg ">get started</Button>
      
      
        
      </div>
    </div>
  );
}