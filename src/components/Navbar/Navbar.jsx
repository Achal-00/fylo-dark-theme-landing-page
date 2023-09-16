export default function Navbar() {
  return (
    <div className="bg-intro-email-signup-bg flex justify-between items-center p-[5%] landscape:p-[0%] landscape:px-[5%] landscape:py-[3%]">
      <img src="logo.svg" alt="" className="w-[6em]" />
      <div className="flex gap-[2em] text-white font-others landscape:gap-[3em]">
        <p className="hover:cursor-pointer hover:underline">Features</p>
        <p className="hover:cursor-pointer hover:underline">Team</p>
        <p className="hover:cursor-pointer hover:underline">Sign In</p>
      </div>
    </div>
  );
}
