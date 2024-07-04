"use client";

import * as React from "react";
import Link from "next/link";
import { MdOutlinePhonelink } from "react-icons/md";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


export function Navmenu() {
  return (
    <NavigationMenu className="z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kategoriler</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Elektronik, Cep Telefonu" />
              <ListItem href="/docs/installation" title="Ev, Yaşam, Ofis, Kırtasiye" />
              <ListItem href="/docs/primitives/typography" title="Anne, Bebek, Oyuncak" />
              <ListItem href="/docs/primitives/color" title="Spor, Outdoor, Kitap"/>
              <ListItem href="/docs/primitives/space" title="Kozmetik, Kişisel Bakım"/>
              <ListItem href="/docs/primitives/layout" title="Moda, Aksesuar" />
              <ListItem href="/docs/primitives/flex" title="Süpermarket, Petshop"/>
              <ListItem href="/docs/primitives/stack" title="Oyun, Hobi" />
              <ListItem href="/docs/primitives/grid" title="Hediyelik, Parti"/>
              <ListItem href="/docs/primitives/grid" title="Otomobil, Motosiklet"/>
              <ListItem href="/docs/primitives/grid" title="Yapı Market, Bahçe"/>
              <ListItem href="/docs/primitives/grid" title="Hırdavat, El Aletleri"/>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
