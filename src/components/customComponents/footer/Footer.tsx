function Footer() {
    return (
        <footer className=" w-full py-10 px-4 bg-primary-color text-center relative">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className=" absolute left-10">
                    <a className="flex-none text-xl font-semibold text-black dark:text-white" href="/" aria-label="Brand">
                        <img src="./images/BoxinatorLogo.png" alt="Boxinator Logo" className="w-32" />  {/* Assuming you have a logo image */}
                    </a>
                </div>
                <nav className="">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="/contact" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Contact us</a></li>
                    </ul>
                    <div className="mt-4">
                        <p className="text-xs text-black dark:text-white">
                            &copy; {new Date().getFullYear()} Boxinator. All Rights Reserved.
                        </p>
                    </div>
                </nav>

            </div>

        </footer>

    )
}

export default Footer