import * as React from "react";

export const NavigationMenu: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <nav {...props}>{children}</nav>
);
export const NavigationMenuList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ children, ...props }) => (
  <ul {...props}>{children}</ul>
);
export const NavigationMenuItem: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({ children, ...props }) => (
  <li className="relative group" {...props}>{children}</li>
);
export const NavigationMenuTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);
export const NavigationMenuContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div className="absolute left-0 top-full mt-2 min-w-[200px] bg-white shadow-lg z-10 hidden group-hover:block" {...props}>
    {children}
  </div>
);
