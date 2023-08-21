import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {Button, buttonVariants} from "@/components/ui/button";

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-md inline-block font-bold">
          soham govande
        </span>
      </Link>
    <div className="flex-1" />
      <div className="flex items-center space-x-4">
        {items?.map((item) => (
          <Link key={item.href} href={item.href!}
            className={cn(
              "inline-block rounded-md px-2 py-1 text-sm font-medium",
              "hover:opacity-75"
            )}>
            {item.title}
          </Link>
        ))}
        <Link href="https://github.com/sohamgovande"><Icons.gitHub className='h-5 w-5 hover:opacity-75' /></Link>
        <Link href="https://twitter.com/sohamgovande"><Icons.twitter className='h-5 w-5 hover:opacity-75' /></Link>
      </div>
    </div>
  )
}
