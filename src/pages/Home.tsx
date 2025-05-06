import { JSX } from "react";
import Highlight from "../components/Highlight";
import Procedure from "../components/Procedure";
import Footer from "../components/Footer";
import Pricing from "@/components/Pricing";
import MyMap from "@/components/Map";

const Home = (): JSX.Element => {
    return <div className="bg-[#F2F2F2]">
       <Highlight/>
       <Procedure/>
       <Pricing/>
       <MyMap/>
       <Footer/>
      
    </div>
};

export default Home;