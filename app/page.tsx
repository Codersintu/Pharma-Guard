import Feature from "@/component/Feature";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Workflow from "@/component/Workflow";


export default function Home() {

  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Feature/>
      <Workflow/>
    </div>
  );
}