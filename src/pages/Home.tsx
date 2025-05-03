import { JSX } from "react";
import Highlight from "../components/Highlight";
import Procedure from "../components/Procedure";

const Home = (): JSX.Element => {
    return <div className="bg-[#F2F2F2]">
       <Highlight/>
       <Procedure/>
    </div>
};

export default Home;