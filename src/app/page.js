import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="flex flex-row justify-between container mx-auto max-w-5xl py-5">
        <div>Logo</div>
        <div>
          <ul className="flex flex-row space-x-5">
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen py-5">
        <div className="border-b shadow-md">
          <div className="container mx-auto max-w-5xl py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="">
                <div className="flex flex-row space-x-3">
                  <div className="text-3xl">I&apos;m</div>
                  <h1 className="text-5xl font-bold leading-7 text-orange-300">
                    Kaixiang Chen
                  </h1>
                </div>
                <div className="text-2xl my-7">
                  Software Engineer and Web Developer
                </div>
                <div className="text-md text-gray-600"></div>
              </div>
              <div className="">
                <Image
                  className="rounded-full border-8 border-orange-600"
                  src="/avatar.png"
                  alt="Kaix"
                  width={480}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 container mx-auto max-w-5xl py-10">
          <h6 className="text-5xl py-2 font-medium">About</h6>
          <div className="p-2 text-xl">
            I&apos;m a full-stack web developer with 10 years of experience
          </div>
        </div>
        <div className="px-2 my-5 container mx-auto max-w-5xl py-10">
          <div className="text-5xl text-center my-3">Skills</div>
          <div>
            <ul className="py-5 grid grid-cols-4 gap-4 place-items-stretch">
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
            <ul className="py-5 grid grid-cols-4 gap-4 place-items-stretch">
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
            <ul className="py-5 grid grid-cols-4 gap-4 place-items-stretch">
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
              <li className="py-10 px-16 bg-slate-600 rounded hover:bg-orange-200">
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
          <div className="basis-1/3 border-y border-y-indigo-500 bg-gray-300 h-48"></div>
          <div className="basis-1/3 bg-gray-300 h-48"></div>
          <div className="basis-1/3 border-y border-y-indigo-500 bg-gray-300 h-48"></div>
        </div>
        <div className="absolute inset-x-0 top-0">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center text-3xl">Contact Me</div>
            <div className="flex flex-row space-x-3 justify-center my-7">
              <div className="border px-3 py-2 rounded-md">
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
                  <span>me@kaixsean.com</span>
                </a>
              </div>
              <div className="flex flex-row space-x-2 border px-3 py-2 rounded-md">
                <Image
                  className=""
                  src="/location-pin.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
                <span>Taipei, Taiwan</span>
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
        <p className="text-center">© 2024. All rights reserved.</p>
      </footer>
    </main>
  )
}
