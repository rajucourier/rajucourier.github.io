import React from 'react'

function OurServices() {
    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-10">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mx-auto">
                {/* Left block - full height */}
                <div className="bg-white rounded-lg p-4 h-full">
                    <h2 className="text-2xl font-bold mb-4">Ship & Shop</h2>
                    <h2 className="text-xl font-semibold mb-4">Shop from Indian Stores and Ship
                    Internationally to your doorstep</h2>
                   <p className="mb-2">
                   Register FREE and receive a Virtual Shipping Address free of cost. Purchase items from any Indian online Store and save them in your Personal Locker. Once you have consolidated your purchases, we will repackage and Ship them to your doorstep.
                    </p>
                    <p className="mb-2 text-rose-500">
                    [we ship Quality food items also from HomeMakers - vellaniki/pullareddy etc.]
                    </p>
                </div>

                {/* Right side with two blocks */}
                <div className="grid grid-rows-2 gap-4">
                    {/* Top half block */}
                    <div className="bg-white rounded-lg p-4">
                        <h2 className="text-xl font-bold mb-4">Personal Shopper Service</h2>
                        <p className="mb-2">
                            Our personal shopper service allows you to shop from any Indian store. We handle the entire process, from purchasing to shipping.
                            Hyderabad(kphb,BegumBazar..etc)
                        </p>
                    </div>
                    
                    {/* Bottom section with two small blocks */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                            <h2 className="text-lg font-bold mb-2">Medicine Shipping</h2>
                            <p className="text-sm mb-2">
                                We specialize in shipping medicines and healthcare products, ensuring safe and timely delivery.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <h2 className="text-lg font-bold mb-2">International Couriers</h2>
                            <p className="text-sm mb-2">
                                We offer international courier services to various countries, ensuring your packages reach their destination safely.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;