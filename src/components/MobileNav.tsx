"use client";

import { navItems } from "@/data/site";
import { useEffect, useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        className="text-[#212529] text-2xl p-1 duration-300 hover:scale-110"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
      </button>
      {open ? (
        <nav
          id="mobile-nav-panel"
          className="absolute right-0 top-[calc(100%+12px)] w-[min(280px,calc(100vw-2.5rem))] bg-white border-2 border-[#616c5c] rounded-md shadow-lg z-40"
        >
          <ul className="flex flex-col py-2 uppercase">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-5 py-3 text-[#212529] font-patrick text-xl font-semibold hover:bg-[#f8f9fa]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}