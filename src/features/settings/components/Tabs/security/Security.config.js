import { Clock, Lock, Phone, Shield } from "lucide-react";

export const SecurityData = [
  {
    title: "Password",
    statu: "Last changed 30 days ago",
    enabled: true,
    btn: "Change Password",
    primary: false,
    icon: Lock,
  },
  {
    title: "Two-Factor Authentication",
    statu: "Enabled via Authenticator App",
    enabled: true,
    btn: "Manage",
    primary: false,
    icon: Phone,
  },
  {
    title: "Biometric Login",
    statu: "Not configured",
    enabled: false,
    btn: "Enable",
    primary: true,
    icon: Shield,
  },
  {
    title: "Active Sessions",
    statu: "3 devices currently logged in",
    enabled: true,
    btn: "View All",
    primary: false,
    icon: Clock,
  },
];
