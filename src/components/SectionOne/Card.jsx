export default function Card(props) {
  return (
    <div className="grid gap-[1em] justify-items-center text-center grid-rows-[1fr_0.2fr_1fr]">
      <img src={props.image} alt="" className="w-[5em]" />
      <h1 className="text-white font-headings text-[130%] font-bold">
        {props.heading}
      </h1>
      <p className="text-white font-others px-[5%] text-[90%]">
        {props.content}
      </p>
    </div>
  );
}
