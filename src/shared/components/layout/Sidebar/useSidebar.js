import { useState } from "react";

export const useSidebar = () => {
  const [open, setOpen] = useState(false);
  
  const toggle = () => setOpen(prev => !prev);
  
  return { open, toggle };
};