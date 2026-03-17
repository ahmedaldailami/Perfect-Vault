const Switcher =()=>{
    return (
      <div className="flex card-bg p-1.5 mb-8">
        <button
          className="flex-1 p-3.5 [font-family:inherit] text-base font-semibold cursor-pointer rounded-[8px] [transition:all_0.2s_ease] active hover:text-primary gradiant text-[#1c1c1e]"
          data-form="login"
        >
          Sign In
        </button>
        <button
          className="flex-1 p-3.5 bg-none [font-family:inherit] text-base font-semibold text-secondary cursor-pointer rounded-[8px] [transition:all_0.2s_ease] active hover:text-primary"
          data-form="register"
        >
          Sign Up
        </button>
      </div>
    );
}
export default Switcher;