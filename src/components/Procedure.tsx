import { JSX } from "react";

const Procedure = (): JSX.Element => {
    return (
        <section className="w-full px-4 py-8 bg-gray-100">
            {/* <!-- Heading --> */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How does it work?</h2>
            </div>

            {/* <!-- Cards Grid --> */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* <!-- Card 1: Ship --> */}
                <div className="bg-[#D7E7FF] p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-2">SIGN-UP</h3>
                    <p className="text-gray-600 text-sm">
                        Sign up easily and get your own unique address in India.
                        Start shopping from your favorite Indian stores.
                    </p>
                </div>

                {/* <!-- Card 2: Shop --> */}
                <div className="bg-[#D7E7FF] p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-2">SHOP</h3>
                    <p className="text-gray-600 text-sm">
                       shop from top inidan e-commerece storeand brands.
                        Get the best deals and offers.
                    </p>
                </div>

                {/* <!-- Card 3: Ship --> */}
                <div className="bg-[#D7E7FF] p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-2">SHIP</h3>
                    <p className="text-gray-600 text-sm">
                        Ship your products to your doorstep with our reliable shipping services.
                        Track your orders in real-time.
                    </p>
                </div>

                {/* <!-- Card 4: RECIVE --> */}
                <div className="bg-[#D7E7FF] p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-2">RECEIVE</h3>
                    <p className="text-gray-600 text-sm">
                        Receive your products at your doorstep with in 3-6 days.
                        Enjoy shopping from India without any worries.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Procedure;
