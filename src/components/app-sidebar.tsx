import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Sparkles } from "./icons/Sparkles";
import { LogOut, MoreHorizontal, Settings } from "lucide-react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { File } from "./icons/File";
import { Zap } from "./icons/Zap";

// Dummy guest state (replace with your actual auth logic)
const isGuest = true;

// Example navMain data (restore or import as needed)
const navMain = [
  {
    name: "Past",
    url: "#",
    items: [
      { name: "Chat", url: "#" },
      { name: "Code Generation", url: "#" },
    ],
  },
];

// Example user data (replace with real user data)
const user = {
  name: "John Doe",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="mt-7 mb-1.5 flex flex-row justify-between items-center">
        <Logo />
        <SidebarTrigger icon="close" className="pr-2 md:hidden" />
      </SidebarHeader>
      <SidebarContent className="px-1.5">
        <ul>
          <SidebarMenuItem key={"onGoing"}>
            <SidebarMenuButton asChild className="bg-gray-100 ">
              <a href="#">
                <Zap className="size-5" />
                <span className="text-primary">Ongoing prompt</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </ul>

        <nav className="flex flex-col gap-2">
          {navMain.map((section) => (
            <div key={section.name}>
              <div className="text-xs font-semibold text-muted-foreground px-2 py-1">
                {section.name}
              </div>
              <ul className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <File />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="outline"
          className="w-full mb-4 flex justify-start items-center gap-2 cursor-pointer"
        >
          <Sparkles />
          <span>Start new chat</span>
        </Button>
        {isGuest ? (
          <div className="rounded-xl border bg-card p-4 shadow-sm flex flex-col gap-3">
            <div className="font-semibold text-base ">
              Let’s create an account
            </div>
            <div className="text-muted-foreground text-sm  mb-2">
              Save your chat history, share chat, and personalize your
              experience.
            </div>
            <Button className="w-full mb-1" variant="default">
              Sign in
            </Button>
            <Button className="w-full" variant="link">
              Create account
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full px-2 py-2 rounded-lg hover:bg-muted transition">
            <div className="flex items-center gap-2">
              <Image
                src={user.avatar}
                alt={user.name}
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-sm font-medium">{user.name}</span>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-1 rounded hover:bg-muted">
                  <span className="sr-only">Open user menu</span>
                  <svg
                    width={20}
                    height={20}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="5" cy="12" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="19" cy="12" r="1.5" />
                  </svg>
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-48 p-2 rounded-xl shadow border bg-card"
              >
                <button className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-muted text-sm">
                  <Settings size={16} /> Settings
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-muted text-sm text-destructive">
                  <LogOut size={16} /> Sign out
                </button>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
