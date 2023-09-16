export default function SectionTwo() {
  return (
    <div className="px-[5%] grid gap-[2em] landscape:grid-cols-2 items-center landscape:gap-[3em] pb-[20%] landscape:pb-[10%]">
      <img src="illustration-stay-productive.png" alt="" className="w-[100%]" />
      <div className="grid gap-[1em]">
        <h1 className="font-headings text-white text-[200%] font-bold">
          Stay productive,
          <br />
          wherever you are
        </h1>
        <p className="font-others text-white text-[90%] pr-[3%]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="font-others text-white text-[90%] pr-[3%]">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="w-max flex items-center gap-[1em] border-b-[thin] border-cta-grad-from text-cta-grad-from hover:cursor-pointer hover:text-white hover:border-white">
          <p className="font-others">See how Fylo works</p>
          <img src="icon-arrow.svg" alt="" className="w-[1em]" />
        </div>
      </div>
    </div>
  );
}
