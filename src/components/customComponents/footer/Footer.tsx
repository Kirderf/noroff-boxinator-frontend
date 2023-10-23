function Footer() {
    return (
        <footer className=" w-full py-10 px-4 bg-primary-color text-center relative">
            <div className="flex flex-col min-[350px]:flex-row justify-between items-center">
                <div className="">
                    <a className="flex-none text-xl font-semibold text-black dark:text-white" href="/" aria-label="Brand">
                        <img src="/./images/BoxinatorLogo.png" alt="Boxinator Logo" className="w-32" />
                    </a>
                </div>
                <nav className="">
                    <ul className="">
                        <li><a href="/contact" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Contact us</a></li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                        <p className="text-xs text-black dark:text-white">
                            &copy; {new Date().getFullYear()} Boxinator. All Rights Reserved.
                        </p>

                    </div>

                </nav>
                <div className="w-32"></div>
            </div>

        </footer>

    )
}

export default Footer