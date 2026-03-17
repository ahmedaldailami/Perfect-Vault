import { Shield } from "lucide-react";

const SocialBtns = () => {
  return (
    <div className="flex gap-4 mb-8">
      <button
        type="button"
        className="flex-1 p-3.5 card-bg border flex items-center justify-center gap-2.5 text-[15px] font-medium [font-family:inherit] text-primary cursor-pointer [transition:all_0.2s_ease] hover:bg-card-alt hover:border-myColor"
      >
        <Shield />
        Google
      </button>
      <button
        type="button"
        className="flex-1 p-3.5 card-bg border flex items-center justify-center gap-2.5 text-[15px] font-medium [font-family:inherit] text-primary cursor-pointer [transition:all_0.2s_ease] hover:bg-card-alt hover:border-myColor"
      >
        <Shield />
        Apple
      </button>
    </div>
  );
};
export default SocialBtns;
