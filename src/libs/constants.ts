import { Home, Landmark, PersonStanding, Settings, User } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Classes", icon: Landmark, path: "/classes" },
  { name: "Students", icon: PersonStanding, path: "/students" },
  { name: "Profile", icon: User, path: "/profile" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export { menuItems };
