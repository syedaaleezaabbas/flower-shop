export default function Footer() {
    return (
        <footer className="bg-purple-300 shadow-md py-4 max-w-screen-2xl mx-auto">
            <div className="text-center">
                <p className="text-black">&copy; 2024 Flower Shop. All Rights Reserved.</p>
                <ul className="flex justify-center gap-x-4 mt-4">
                    <li><a href="#" className="text-black hover:text-gray-400">Privacy Policy</a></li>
                    <li><a href="#" className="text-black hover:text-gray-400">Terms of Service</a></li>
                    <li><a href="#" className="text-black hover:text-gray-400">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    )
}