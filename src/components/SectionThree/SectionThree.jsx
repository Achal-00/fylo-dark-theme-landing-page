import Card from "./Card";

export default function SectionThree() {
  return (
    <div className="px-[10%] pb-[50%] landscape:pb-[20%] landscape:lg:pb-[10%] landscape:px-[5%]">
      <img src="bg-quotes.png" alt="" className="w-[3em]" />
      <div className="grid gap-[2em] landscape:grid-cols-3">
        <Card image="profile-1.jpg" name="Satish Patel" />
        <Card image="profile-2.jpg" name="Bruce McKenzie" />
        <Card image="profile-3.jpg" name="Iva Boyd" />
      </div>
    </div>
  );
}
