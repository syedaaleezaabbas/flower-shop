import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
    return (
        <header className="bg-purple-300 shadow-md">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    Florist Home Page
                </div>

                {/* Hamburger menu icon for smaller screens */}
                <div className="md:hidden flex items-center pl-12">
                    <button className="text-3xl">
                        <RxHamburgerMenu />
                    </button>
                </div>

                <ul className="flex items-center gap-x-6">
                    <li className="hidden md:block"><Link href="/landing" className="text-black hover:text-gray-400">Landing</Link></li>
                    <li className="hidden md:block"><Link href="/" className="text-black hover:text-gray-400">Home</Link></li>
                    <li className="hidden md:block"><Link href="/gallery" className="text-black hover:text-gray-400">Gallery</Link></li>
                    <li className="hidden md:block"><Link href="/shop" className="text-black hover:text-gray-400">Shop</Link></li>
                    <li className="hidden md:block"><Link href="/About" className="text-black hover:text-gray-400">About</Link></li>
                    <li className="hidden md:block"><Link href="/contact" className="text-black hover:text-gray-400">Contact Us</Link></li>
                    <li className="hidden md:block"><Link href="/blog" className="text-black hover:text-gray-400">Blog</Link></li>
                    <FaCartShopping className="text-2xl"/>
                </ul>
            </nav>
        </header>
    )
}