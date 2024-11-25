export default function Hero() {
    return (
        <section className="bg-[url('/bg-img.avif')] bg-cover min-h-[400px] md:min-h-[500px] py-12 max-w-screen-2xl mx-auto">

            <div className="container mx-auto px-4 flex justify-center items-center">
                <div className="md:w-1/2 text-left md:mr-80">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-10 text-shadow style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.9)' }}">Flower Shop</h1>
                    <p className="text-2xl md:text-3xl text-white mb-4 md:mb-6 text-shadow style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.8)' }}">Nulla tempus sollicitudin dui, ut vehicula lacus porta vel duis urna ligula luctus at feugiat a lacinia ut sem.</p>
                    <button className="bg-gray-700 text-white px-6 py-2 md:px-9 md:py-3 rounded-full shadow-lg hover:bg-gray-800 transition">SHOP NOW</button>
                </div>
            </div>
        </section>
    )
}