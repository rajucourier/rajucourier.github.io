

const MyMap = ({ location="geo:0,0?q=RAJU COURIER - (Personal Shopper Service & International Courier), Telangana", zoom = 15 }) => {
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className=" mx-5 my-5 sm:mx-10 md:mx-10 lg:mx-40 sm:my-10 md:my-10 lg:my-10">
            <iframe
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg"
                src={mapUrl}
                title={`Map of ${location}`}
                loading="lazy"
            />
        </div>
    );
};

export default MyMap;