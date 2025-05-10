import { JSX } from "react";
import Highlight from "../components/Highlight";
import Procedure from "../components/Procedure";
import Footer from "../components/Footer";
import Pricing from "@/components/Pricing";
import MyMap from "@/components/Map";
import OurServices from "@/components/OurServices";

const Home = (): JSX.Element => {
    return <div className="bg-[#F2F2F2]">
       <Highlight/>
       <Procedure/>
       <Pricing/>
       <OurServices/>
       <MyMap/>
       <Footer/>
      
    </div>
};

export default Home;