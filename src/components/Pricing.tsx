import { JSX } from "react";
import ShippingRatesTable from "./shipping-rates-table";

const Pricing = (): JSX.Element => {
    return(
        <div>
             <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Shipping Rates</h2>
                </div>
                <ShippingRatesTable/>
            
        </div>
      
    )
}

export default Pricing;
