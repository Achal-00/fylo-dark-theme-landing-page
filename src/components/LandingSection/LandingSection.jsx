export default function LandingSection() {
  return (
    <div className="bg-intro-email-signup-bg grid pt-[10%] text-center landscape:pt-[2%] relative">
      <img
        src="illustration-intro.png"
        alt=""
        className="w-[75%] justify-self-center landscape:w-[50%] relative z-10"
      />
      <h1 className="font-headings text-white text-[200%] px-[10%] font-bold relative z-10 landscape:lg:px-[0%] landscape:lg:w-[50%] landscape:mx-auto pt-[2em] landscape:text-[220%]">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="font-others text-white px-[10%] relative z-10 landscape:lg:px-[0%] landscape:lg:w-[40%] landscape:mx-auto pt-[2em] bg-main-bg landscape:bg-transparent">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <div className="pt-[2em] pb-[20%] bg-main-bg relative landscape:bg-transparent landscape:pb-[10%]">
        <button className="bg-gradient-to-r from-cta-grad-from to-cta-grad-to w-[15em] mx-auto rounded-full text-white py-[0.8em] relative z-10 hover:cursor hover:brightness-125">
          Get Started
        </button>
        <img
          src="bg-curvy-desktop.svg"
          alt=""
          className="w-full hidden landscape:block absolute bottom-0"
        />
      </div>
      <img
        src="bg-curvy-mobile.svg"
        alt=""
        className="w-full landscape:hidden absolute top-[55%] -translate-y-1/2 z-0"
      />
    </div>
  );
}
