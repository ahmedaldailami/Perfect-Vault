import { Clock, Lock, Phone, Shield } from "lucide-react";

export const PreferencesData = {
  select: [
    {
      label: "Currency",
      options: [
        "USD - US Dollar",
        "EUR - Euro",
        "GBP - British Pound",
        "JPY - Japanese Yen",
      ],
    },
    {
      label: "Language",
      options: ["English", "Arabic", "Spanish", "French"],
    },
    {
      label: "Timezone",
      options: ["Eastern Time (ET)", "Pacific Time (PT)", "UTC", "GMT"],
    },
    {
      label: "Date Format",
      options: ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"],
    },
  ],
  check: [
    {
      title: "Dark Mode",
      disc: "Use dark theme for the interface",
      active: true,
    },
    {
      title: "Compact View",
      disc: "Show more data with smaller elements",
      active: false,
    },
  ],
};
