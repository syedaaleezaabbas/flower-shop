import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
    return (
        <header className="flex justify-between items-center max-w-screen-2xl mx-auto p-4 md:px-12 bg-purple-300 shadow-md">
            <div className="md:text-2xl text-xl font-bold">
                Florist Home Page
            </div>

            {/* desktop navbar */}
            <nav className="hidden md:block">
                <ul className="flex items-center text-lg gap-x-10">
                    <li><Link href="/" className="text-black hover:text-gray-400">Home</Link></li>
                    <li><Link href="/About" className="text-black hover:text-gray-400">About</Link></li>
                    <li><Link href="/shop" className="text-black hover:text-gray-400">Shop</Link></li>
                    <li><Link href="/shop" className="text-black hover:text-gray-400">Blog</Link></li>
                    <li><Link href="/contact" className="text-black hover:text-gray-400">Contact Us</Link></li>
                    <FaCartShopping className="text-xl" />
                </ul>
            </nav>

            {/* mobile navbar */}
            <Sheet>
                <SheetTrigger className="md:hidden flex justify-between items-center gap-x-4">
                    <Menu className="text-xl" />
                    <FaCartShopping className="text-xl" />
                </SheetTrigger>
                <SheetContent className="bg-gray-400 border-l-4 border-l-purple-500">
                    <nav>
                        <ul className="flex flex-col text-center pt-20 gap-y-4">
                            <li><Link href="/" className="text-black hover:text-purple-500">Home</Link></li>
                            <li><Link href="/About" className="text-black hover:text-purple-500">About</Link></li>
                            <li><Link href="/shop" className="text-black hover:text-purple-500">Shop</Link></li>
                            <li><Link href="/shop" className="text-black hover:text-purple-500">Blog</Link></li>
                            <li><Link href="/contact" className="text-black hover:text-purple-500">Contact Us</Link></li>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}