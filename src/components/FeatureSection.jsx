export default function FeatureSection() {
  return (
    <>
    <section className="bg-[#151515] text-white py-20 px-6 md:px-16" id="feature">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image side */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1758747376759-454112cd108d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900"
            alt="Noc Noc Dubai Nightlife"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Text side */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f4c542]">
            The Pulse of Dubai Nights
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            At <span className="text-white font-semibold">Noc Noc Dubai</span>, 
            every night is a story waiting to be told. Immerse yourself in an 
            atmosphere where luxury meets energy — where neon lights, signature 
            cocktails, and the city’s hottest DJs create an unforgettable vibe.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            From the bar to the dance floor, every corner of Noc Noc is built 
            for connection, laughter, and pure nightlife magic.
          </p>
          <button className="mt-4 px-10 py-3 rounded-full bg-[#f4c542] text-black font-semibold uppercase tracking-wide hover:bg-[#e5b932] transition-all duration-300">
            Discover More
          </button>
        </div>
      </div>
    </section>

    </>

    
  );
}
