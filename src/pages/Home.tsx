import { JSX } from "react";
import Highlight from "../components/Highlight";
import Procedure from "../components/Procedure";
import Footer from "../components/Footer";
import Pricing from "@/components/Pricing";

const Home = (): JSX.Element => {
    return <div className="bg-[#F2F2F2]">
       <Highlight/>
       <Procedure/>
       <Pricing/>
       <Footer/>
    </div>
};

export default Home;