import { useState } from "react";

export default function Footer() {
  const [mail, setMail] = useState("");

  function submitHandler() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex)) {
      document.querySelector(".error-holder").classList.remove("hidden");
      document.querySelector(".error-holder").classList.remove("text-error");
      document.querySelector(".error-holder").classList.add("text-purple-500");
      document.querySelector(".error-holder").textContent =
        "Thanks for subscribing 💜";
    } else {
      document.querySelector(".error-holder").classList.remove("hidden");
      document
        .querySelector(".error-holder")
        .classList.remove("text-purple-500");
      document.querySelector(".error-holder").classList.add("text-error");
      document.querySelector(".error-holder").textContent =
        "Please enter a valid email address";
    }
  }

  return (
    <div className="bg-footer-bg p-[5%] pt-[60%] mt-[10%] landscape:px-[5%] landscape:pt-[25%] landscape:lg:pt-[15%] landscape:py-[3%] font-others grid gap-[2em] text-[120%] relative">
      <div className="absolute bg-intro-email-signup-bg w-[90%] text-center grid gap-[1em] left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-[1em] p-[2em] landscape:px-[5em] landscape:lg:w-[70%] shadow-[0_10px_55px_-3px_rgba(0,0,0,0.1)]">
        <h1 className="font-headings font-bold text-white text-[150%]">
          Get early access today
        </h1>
        <p className="text-white font-others landscape:px-[8%] text-[90%]">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="grid gap-[1em] landscape:grid-cols-[1fr_0.5fr]">
          <input
            type="text"
            className="w-full rounded-full h-[3em] pl-[1em] text-[90%] outline-none"
            placeholder="email@example.com"
            onChange={(e) => setMail(e.currentTarget.value)}
          />
          <button
            onClick={submitHandler}
            className="text-[90%] w-full h-[3em] bg-gradient-to-r from-cta-grad-from to-cta-grad-to mx-auto rounded-full text-white py-[0.6em] relative z-10 hover:cursor hover:brightness-125"
          >
            Get Started for free
          </button>
          <p className="font-others text-error text-[80%] landscape:text-left hidden error-holder">
            Please enter a valid email address
          </p>
        </div>
      </div>
      <div className="grid gap-[3em] landscape:lg:grid-cols-6 landscape:items-start">
        <img
          src="logo.svg"
          alt=""
          className="w-[8em] landscape:lg:col-start-1 landscape:lg:col-end-7"
        />
        <div className="grid gap-[1em] landscape:col-span-3 landscape:grid-cols-[1fr_0.5fr] landscape:items-start">
          <div className="flex items-start gap-[1em]">
            <img src="icon-location.svg" alt="" className="w-[1em]" />
            <p className="text-white font-others text-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="grid gap-[1em]">
            <div className="flex items-start gap-[1em]">
              <img src="icon-phone.svg" alt="" className="w-[1em]" />
              <p className="text-white font-others text-[80%]">
                +1-543-123-4567
              </p>
            </div>
            <div className="flex items-start gap-[1em]">
              <img src="icon-email.svg" alt="" className="w-[1em]" />
              <p className="text-white font-others text-[80%]">
                example@fylo.com
              </p>
            </div>
          </div>
        </div>
        <div className="text-white grid gap-[0.5em] text-[80%]">
          <p className="hover:cursor-pointer hover:font-bold">About Us</p>
          <p className="hover:cursor-pointer hover:font-bold">Jobs</p>
          <p className="hover:cursor-pointer hover:font-bold">Press</p>
          <p className="hover:cursor-pointer hover:font-bold">Blog</p>
        </div>
        <div className="text-white grid gap-[0.5em] text-[80%]">
          <p className="hover:cursor-pointer hover:font-bold">Contact Us</p>
          <p className="hover:cursor-pointer hover:font-bold">Terms</p>
          <p className="hover:cursor-pointer hover:font-bold">Privacy</p>
        </div>
        <div className="flex justify-center gap-[1em]">
          <div className="border-[thin] border-white rounded-full p-[0.6em] hover:cursor-pointer">
            <img src="icon-facebook.svg" alt="" className="w-[1em]" />
          </div>
          <div className="border-[thin] border-white rounded-full p-[0.6em] hover:cursor-pointer">
            <img src="icon-twitter.svg" alt="" className="w-[1em]" />
          </div>
          <div className="border-[thin] border-white rounded-full p-[0.6em] hover:cursor-pointer">
            <img src="icon-instagram.svg" alt="" className="w-[1em]" />
          </div>
        </div>
      </div>
    </div>
  );
}
