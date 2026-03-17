import { Edit, Search } from "lucide-react";
import InputField from "../InputField";

const ProfileTab = () => {
  return (
    <section className="card-bg">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="size-25 gradiant rounded-[20px] flex items-center justify-center text-4xl font-bold text-[#1c1c1e] relative">
          AA
          <div className="absolute -bottom-2 -right-2 size-9 bg-background-alt border-2 border-myColor text-myColor rounded-full flex items-center justify-center cursor-pointer [transition:all_0.2s_ease] hover:gradiant hover:border-0 hover:text-[#1c1c1e] ">
            <Edit size={16} />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-primary mb-1">Ahmed Adnan</h2>
          <p className="text-[15px] text-secondary">alex.morgan@email.com</p>
          <span className="inline-block px-3 py-1 gradiant rounded-[20px] text-xs font-semibold text-[#1c1c1e] mt-2">
            Pro Trader
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <InputField label="First Name" value="Ahmed" id="fName" type="text" />
        <InputField label="Last Name" value="Adnan" id="fName" type="text" />
        <InputField
          label="Email Address"
          value="ahmed.adnan@gmail.com"
          id="email"
          type="email"
        />
        <InputField
          label="Phone Number"
          value="+967 772 554 203"
          id="phone"
          type="tel"
        />
      </div>
      <InputField
        label="Bio"
        value="I am a Software Eng"
        id="Bio"
        type="text"
        placeholder="Tell us about yourself..."
      />

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border text-[#1c1c1e] gradiant hover:gradiant-hover">
          Save Changes
        </button>
        <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border text-primary bg-transparent hover:bg-card-alt">
          Cancel
        </button>
      </div>
    </section>
  );
};
export default ProfileTab;
