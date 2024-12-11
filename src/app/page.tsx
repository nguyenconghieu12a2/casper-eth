// import Image from "next/image";
import Hero from "./hero/hero";
import Body1 from "./body1/body1";
import Body2 from "./body2/body2";
import Footer from "./foot/foot1";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-[1990px]">
      <Hero />
      <div className="">
        <Body1 />
      </div>
      <div>
        <Body2 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
