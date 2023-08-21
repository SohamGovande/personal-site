import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import type {NavItem} from "@/types/nav";

const items: NavItem[] = [
  // {
  //   title: "about",
  //   href: "/about",
  //   disabled: false,
  //   external: false
  // },
  // {
  //   title: "writing",
  //   href: "/blog",
  //   disabled: false,
  //   external: false
  // }
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="container py-2 border-b">
        <MainNav items={items}/>
      </div>
    </header>
  )
}
