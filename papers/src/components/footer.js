import React from "react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import Link from "next/link";
import Logo from "@/components/logo"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12 bg-foreground">
      <div className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6 px-16 lg:px-40">
        <LogoColumn />
        <GenericColumn
          title="Papers"
          links={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "About Us",
              href: "/about",
            },
            {
              title: "Projects",
              href: "/projects",
            },
          ]}
        />

      </div>
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <Logo color={"white"}/>
      <span className="mt-3 inline-block text-xs text-zinc-400">
        © Papers - All rights reserved.
      </span>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block text-zinc-50">{title}</span>
      {links.map((l) => (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
};

export default Footer