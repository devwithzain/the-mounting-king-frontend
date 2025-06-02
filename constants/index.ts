import {
   AudioWaveform,
   BookOpenCheck,
   Command,
   GalleryVerticalEnd,
   House,
   Cog,
   UsersRound,
   Contact,
} from "lucide-react";

export const sideBarItem = {
   user: {
      name: "The Mounting",
      email: "info@mounting.com",
      avatar: "/avatars/shadcn.jpg",
   },
   teams: [
      {
         name: "Acme Inc",
         logo: GalleryVerticalEnd,
         plan: "Enterprise",
      },
      {
         name: "Acme Corp.",
         logo: AudioWaveform,
         plan: "Startup",
      },
      {
         name: "Evil Corp.",
         logo: Command,
         plan: "Free",
      },
   ],
   navMain: [
      {
         title: "Dashboard",
         url: "/dashboard",
         icon: House,
      },
      {
         title: "Services",
         url: "/dashboard/services",
         icon: Cog,
      },
      {
         title: "Request A Demo Page",
         url: "/dashboard/request-a-demo",
         icon: BookOpenCheck,
      },
      {
         title: "Users",
         url: "/dashboard/users",
         icon: UsersRound,
      },
      {
         title: "Employees",
         url: "/dashboard/employees",
         icon: Contact,
      },
   ],
};

export const navLinks = [
   {
      id: 1,
      title: "Home",
      href: "/",
   },
   {
      id: 2,
      title: "Services",
      href: "/services",
   },
   {
      id: 3,
      title: "About",
      href: "/about",
   },
   // {
   //    id: 4,
   //    title: "Products",
   //    href: "/products",
   // },
   {
      id: 5,
      title: "Request A Demo",
      href: "/book-now",
   },
   {
      id: 6,
      title: "Contact Us",
      href: "/contact-us",
   },
];