import { JSX } from "react";

const Highlight = (): JSX.Element => {
    return (
        <section className="w-full px-4 py-12 h-auto bg-[#1B284D]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">

                {/* <!-- Text Section --> */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 ">
                    <h2 className="text-3xl font-bold mb-4 text-white">SHOP FROM INDIA &</h2>
                    <h2 className="text-3xl font-bold mb-4 text-white">SHIP WORLDWIDE</h2>

                    <div className="bg-[#F7AA18] shadow-lg rounded-lg p-6">
                        <ul className="list-disc list-inside font-semibold text-xl">
                            <li className="mb-2">Shop from 1000+ Indian websites & Instagram Stories</li>
                            <li className="mb-2">Ship to 6+ countries</li>
                            <li className="mb-2">Custom Support</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                    <div className="trustpilot-widget" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="602bedf21612a00001f4b2c5" data-style-height="24px" data-style-width="100%" data-theme="dark" data-min-review-count="0" data-style-alignment="center">
                     <a href="https://www.trustpilot.com/review/rajucourier.com" target="_blank" rel="noopener">Trustpilot</a>
                     </div>
                    </div>
                </div>

                {/* <!-- Image Section --> */}
                <div className="w-full md:w-1/2">
                    <img
                        src="./box.svg"
                        alt="Placeholder Image"
                        className="w-full h-60"
                    />
                </div>

            </div>
        </section>
    );
};

export default Highlight;














