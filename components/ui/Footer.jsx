export default function Footer() {
    return (
        <footer className="bg-[#0D2444] text-white p-8 md:p-12 rounded-3xl w-full ">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">

                {/* Join Our JF Products Section */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">Join Our JF Products</h2>
                    <p className="text-sm text-gray-400 mb-4">
                        We'll tell you about store updates and discounts
                    </p>
                    <form>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-transparent focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 transition-colors duration-200 mb-4"
                        />
                        <div className="flex items-center mb-6">
                            <input
                                id="newsletter"
                                type="checkbox"
                                className="w-4 h-4 text-lime-500 bg-gray-100 rounded border-gray-300 focus:ring-lime-500"
                            />
                            <label
                                htmlFor="newsletter"
                                className="ml-2 text-sm text-gray-400"
                            >
                                Yes, subscribe me to your newsletter.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-semibold py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            Join Now
                        </button>
                    </form>
                </div>

                {/* Information Links */}
                <div className="flex-1 min-w-40">
                    <h3 className="text-xl font-semibold mb-4">Information</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Home</a></li>
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Shop</a></li>
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Our Story</a></li>
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Blogs</a></li>
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Contact</a></li>
                    </ul>
                </div>

                {/* Helpful Links */}
                <div className="flex-1 min-w-40">
                    <h3 className="text-xl font-semibold mb-4">Helpful</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">FAQs</a></li>
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Shipping Policy</a></li>
                        <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">My Account</a></li>
                    </ul>
                </div>
            </div>

            <hr className="border-t border-gray-700 my-8" />

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* Logo and Branches */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                    {/* Logo Placeholder */}
                    <div className="bg-gray-700 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    {/* Branches Text */}
                    <div>
                        <span className="text-sm font-semibold text-gray-400">
                            Our Branches
                        </span>
                        <p className="text-sm font-medium text-gray-300">
                            Coimbatore, Chennai, Hyderabad, Goa, Kochi
                        </p>
                    </div>
                </div>

                {/* Contact Us Button */}
                <button className="bg-lime-500 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-lime-400 transition-colors duration-200">
                    Contact Us
                </button>
            </div>
        </footer>
    )
}
