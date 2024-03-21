import Image from 'next/image'

function Navbar() {
  return (
    <div className="bg-customBrown-500 dark:bg-customBlack-800">
      <div className=" flex flex-row justify-between container mx-auto max-w-5xl py-5 px-3">
        <div className="text-xl">
          <Image
            className="m-auto"
            src="/logo.png"
            alt="logo"
            width={48}
            height={48}
          />
        </div>
        <div>
          <div>
            <button aria-label="Toggle Menu" className="sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 text-gray-900 dark:text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="fixed right-0 top-16 h-screen w-full bg-gray-200/90 transition-all duration-300 ease-in-out dark:bg-gray-950/90 hidden translate-x-0">
              <div className="flex justify-end">
                <button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-gray-900 dark:text-gray-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="fixed mt-8 h-full">
                <div className="px-12 py-4">
                  <a
                    className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                    href="/"
                  >
                    About
                  </a>
                </div>
                <div className="px-12 py-4">
                  <a
                    className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                    href="/posts"
                  >
                    Portfolio
                  </a>
                </div>
                <div className="px-12 py-4">
                  <a
                    className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                    href="/tags"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <ul className="hidden md:flex flex-row space-x-5">
            <li className="text-xl">About</li>
            <li className="text-xl">Portfolio</li>
            <li className="text-xl">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
