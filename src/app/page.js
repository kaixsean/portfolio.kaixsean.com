import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
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
                  <button
                    className="mr-8 mt-11 h-8 w-8"
                    aria-label="Toggle Menu"
                  >
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

      <div className="min-h-screen pb-5">
        <div className="bg-customBrown-500 dark:bg-customBlack-800 border-b border-customBrown-500 dark:border-customBlack-800 border-b-2 shadow-lg">
          <div className="container mx-auto max-w-5xl py-10 px-5">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="">
                <div className="flex flex-row space-x-3">
                  <div className="text-2xl md:text-2xl lg:text-3xl">
                    I&apos;m
                  </div>
                  <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold leading-7 md:leading-8 lg:leading-9 text-customBrown-300 dark:text-customYellow-500">
                    Kaixiang Chen
                  </h1>
                </div>
                <div className="text-md md:text-xl lg:text-2xl my-7">
                  Software Engineer and Web Developer
                </div>
                <div className="text-md text-gray-600"></div>
              </div>
              <div className="md:hidden">
                <Image
                  className="rounded-full border-8 border-customBrown-300 dark:border-customYellow-500"
                  src="/avatar.png"
                  alt="Kaix"
                  width={260}
                  height={260}
                />
              </div>
              <div className="hidden md:block">
                <Image
                  className="rounded-full border-8 border-customBrown-300 dark:border-customYellow-500"
                  src="/avatar.png"
                  alt="Kaix"
                  width={480}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 container mx-auto max-w-5xl py-10 px-3">
          <h6 className="text-3xl md:text-5xl py-2 font-medium">About</h6>
          <div className="p-2 text-md md:text-xl">
            I&apos;m a full-stack web developer with 10 years of experience
          </div>
        </div>
        <div className="px-2 my-5 container mx-auto max-w-5xl py-10">
          <div className="text-5xl text-center my-3">Skills</div>
          <div>
            <ul className="py-5 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 place-items-stretch">
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/php.svg"
                      alt="php"
                      width={48}
                      height={48}
                    />
                    <span>PHP</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/python.svg"
                      alt="python"
                      width={48}
                      height={48}
                    />
                    <span>Python</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/mysql-logo.svg"
                      alt="MySQL"
                      width={48}
                      height={48}
                    />
                    <span>MySQL</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/mongodb.svg"
                      alt="mongo"
                      width={48}
                      height={48}
                    />
                    <span>MongoDB</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/linux.svg"
                      alt="linux"
                      width={48}
                      height={48}
                    />
                    <span>Linux</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="py-5 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 place-items-stretch">
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/js.svg"
                      alt="javascript"
                      width={48}
                      height={48}
                    />
                    <span>JavaScript</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/tailwindcss.svg"
                      alt="tailwindcss"
                      width={48}
                      height={48}
                    />
                    <span>Tailwind CSS</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/bootstrap.svg"
                      alt="bootstrap"
                      width={48}
                      height={48}
                    />
                    <span>Bootstrap</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/jquery.svg"
                      alt="bootstrap"
                      width={48}
                      height={48}
                    />
                    <span>jQuery</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <div className="flex flex-row">
                      <Image
                        className="m-auto"
                        src="/skills/html-5.svg"
                        alt="html5"
                        width={48}
                        height={48}
                      />
                    </div>
                    <span>HTML</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <div className="flex flex-row">
                      <Image
                        className="m-auto"
                        src="/skills/css-3.svg"
                        alt="css3"
                        width={48}
                        height={48}
                      />
                    </div>
                    <span>CSS</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="py-5 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 place-items-stretch">
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/flutter.svg"
                      alt="Flutter"
                      width={48}
                      height={48}
                    />
                    <span>Flutter</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/google-cloud.svg"
                      alt="GoogleCloud"
                      width={48}
                      height={48}
                    />
                    <span>Google Cloud Platform</span>
                  </div>
                </div>
              </li>
              <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600 hover:text-white">
                <div className="place-self-center">
                  <div className="flex flex-col space-y-4 justify-center text-center">
                    <Image
                      className="m-auto"
                      src="/skills/git.svg"
                      alt="git"
                      width={48}
                      height={48}
                    />
                    <span>Git Source Control</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative py-5">
        <div className="flex flex-row">
          <div className="basis-1/3 border-y border-y-customBrown-300 dark:border-y-customYellow-500 bg-customBrown-500 dark:bg-customBlack-700 h-48"></div>
          <div className="basis-1/3 bg-customBrown-500 dark:bg-customBlack-700 h-48"></div>
          <div className="basis-1/3 border-y border-y-customBrown-300 dark:border-y-customYellow-500 bg-customBrown-500 dark:bg-customBlack-700 h-48"></div>
        </div>
        <div className="absolute inset-x-0 top-0">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center text-3xl">Contact Me</div>
            <div className="flex flex-row space-x-3 justify-center my-14">
              <div className="border px-3 py-2 rounded border-customBrown-500 dark:border-customBlack-900 bg-customBrown-700 dark:bg-customBlack-900">
                <a
                  href="mailto: me@kaixsean.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row space-x-3"
                >
                  <Image
                    className=""
                    src="/email.svg"
                    alt="mailtome"
                    width={24}
                    height={24}
                  />
                  <span className="text-customBrown-300 dark:text-customYellow-500 font-light text-sm">
                    me@kaixsean.com
                  </span>
                </a>
              </div>
              <div className="flex flex-row space-x-2 border px-3 py-2 rounded border-customBrown-500 dark:border-customBlack-900 bg-customBrown-700 dark:bg-customBlack-900">
                <Image
                  className=""
                  src="/location-pin.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
                <span className="text-customBrown-300 dark:text-customYellow-500 font-light text-sm">
                  Taipei, Taiwan
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-2">
          <div className="flex flex-col items-center">
            <ul className="flex flex-row space-x-3">
              <li>
                <a
                  href="mailto: me@kaixsean.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className=""
                    src="/email.svg"
                    alt="mailtome"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kaixiangchen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className=""
                    src="/linkedin.svg"
                    alt="likedin"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="pt-5 pb-10 container mx-auto max-w-5xl">
        <p className="text-center text-customBrown-300 dark:text-customYellow-500 font-light">
          © 2024. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
