export default function Card(props) {
  return (
    <div className="bg-testimonials-bg px-[2em] py-[3em] grid gap-[1em] rounded-[0.5em]">
      <p className="font-others text-white">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well oiled collaboration
        machine.
      </p>
      <div className="flex items-center gap-[1em]">
        <img
          src={props.image}
          alt=""
          className="w-[3em] rounded-full landscape:w-[2em]"
        />
        <div>
          <h1 className="text-white font-headings font-bold text-[120%] landscape:text-[90%]">
            {props.name}
          </h1>
          <p className="text-white font-others landscape:text-[80%]">
            Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>
  );
}
