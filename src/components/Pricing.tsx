import { JSX } from "react";
import ShippingRatesTable from "./shipping-rates-table";

const Pricing = (): JSX.Element => {
    return(
        <div>
             <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Shipping Rates</h2>
                </div>
            <section className=" px-4 py-8 bg-white mx-10 my-5 rounded-lg shadow-md">
                {/* <!-- Heading --> */} 
               
                <ShippingRatesTable/>
            </section>
        </div>
      
    )
}

export default Pricing;
