import Image from "next/image"

export default function Specialities() {
    return (
        <section className="py-20 bg-gray-50 max-w-screen-2xl mx-auto">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl underline font-bold mb-6">Our Specialities</h2>
                <p className="text-gray-900 max-w-2xl mx-auto mb-8">Nulla tempus sollicitudin dui, ut vehicula lacus forta vel. Duis urna ligula, luctus at feugiat a, lacinia ut sem. Quisque sit amet ipsum ac odio malesuada convallis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit non aut inventore laborum error fugiat dolores quo soluta minus esse, nostrum maiores et eligendi nulla exercitationem impedit quisquam hic dolorum?</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/pic2.avif"
                                alt="Rose"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Roses</h3>
                        <p className="mb-3 md:mb-12">Beautiful, fresh roses for all occasions.</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/pic1.avif"
                                alt="tulip"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Tulips</h3>
                        <p className="mb-3 md:mb-12">Vibrant tulips to brighten your day.</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]" >
                            <Image
                                src="/pic3.png"
                                alt="lily"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Lilies</h3>
                        <p className="mb-16 md:mb-12">Elegant lilies to bring peace and beauty.</p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/Sunflowers.webp"
                                alt="sunflowers"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Sunflowers</h3>
                        <p className="mb-3 md:mb-0">Bright and cheerful sunflowers to light up any space.</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/daisies.jpg"
                                alt="daisies"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Daisies</h3>
                        <p className="mb-3 md:mb-0">Fresh Daisies symbolize purity and simplicity.</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/orchids.avif"
                                alt="orchids"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Orchids</h3>
                        <p className="mb-4 md:mb-0">Exotic orchids that add elegance and sophistication.</p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image src="/hydrangea.png"
                                alt="hydrangea"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Hydrangea</h3>
                        <p className="mb-4 md:mb-0">Hydrangeas represent gratitude and grace.</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/iris.avif"
                                alt="iris"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Iris</h3>
                        <p className="mb-4 md:mb-0">The iris with its striking purple petals, symbolizes elegance and serenity.</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/daffodils.webp"
                                alt="daffodils"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Daffodils</h3>
                        <p className="mb-4 md:mb-0">Daffodils symbolize renewel and joy with their bright yellow blooms.</p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/jasmine.avif"
                                alt="jasmine"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Jasmine</h3>
                        <p className="mb-4 md:mb-0">Jasmine emits a sweet frangrance.</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/lavendar.jpg"
                                alt="lavendar"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Lavendar</h3>
                        <p className="mb-4 md:mb-0">Lavender soothes and calms the mind.</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                            <Image
                                src="/marigold.jpg"
                                alt="marigold"
                                width={350}
                                height={350}
                                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /></div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">Marigolds</h3>
                        <p className="mb-4 md:mb-0">Marigolds add vibrant color to any garden.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}