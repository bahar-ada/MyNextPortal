export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Developer Portal",
  description: "Find",
  navItems: [
    {
      label: "خانه",
      href: "/",
    },
    {
      label: "ورود",
      href: "/login",
    },
    {
      label: "مستندات",
      href: "/docs",
    },

  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://scm.msc.ir",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    nexus:"https://art.msc.ir"
  },
};
