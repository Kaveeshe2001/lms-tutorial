"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
        </Button>
      ) : (
        <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
                Teacher Mode
            </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default NavbarRoutes
