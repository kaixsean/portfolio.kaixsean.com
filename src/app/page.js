import Image from 'next/image'

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen py-24">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="">
          <div className="text-sm text-sky-400 font-semibold">
            Hey There 👋 I am
          </div>
          <h1 className="text-5xl text-slate-800 font-bold my-3">
            Kaixiang Chen
          </h1>
          <div className="text-lg text-slate-900 mb-5">
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
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center justify-between my-5">
        <div className="basis-1/2 flex flex-col space-y-4 px-2">
          <div className="flex items-center">
            <h6 className="rounded-full bg-orange-600 py-1 px-3 text-white font-medium">
              About Me
            </h6>
          </div>
          <div className="p-2">
            I'm a full-stack web developer with 10 years of experience
          </div>
        </div>
        <div className="basis-1/2 flex flex-col space-y-4 px-2">
          <div className="flex items-center">
            <h6 className="rounded-full bg-orange-600 py-1 px-3 text-white font-medium">
              Contact Me
            </h6>
          </div>
          <div className="">
            <ul className="flex flex-row space-x-2">
              <li className="rounded-full border border-gray-300 hover:bg-gray-300 px-2 py-2">
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
              <li className="rounded-full border border-gray-300 hover:bg-gray-300 px-2 py-2">
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
      <div className="max-w-5xl w-full px-2 my-5">
        <div className="text-3xl text-center my-3">Skills</div>
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
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
              <div className="place-self-center">
                <div className="flex flex-col space-y-4 justify-center text-center">
                  <Image
                    className="m-auto"
                    src="/skills/js.svg"
                    alt="javascript"
                    width={48}
                    height={48}
                  />
                  <span>Javascript</span>
                </div>
              </div>
            </li>
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
                    <Image
                      className="m-auto"
                      src="/skills/css-3.svg"
                      alt="css3"
                      width={48}
                      height={48}
                    />
                  </div>
                  <span>HTML & CSS</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="py-5 grid grid-cols-4 gap-4 place-items-stretch">
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
            <li className="py-10 px-16 bg-slate-600 rounded px-3 py-2 hover:bg-orange-200">
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
      <footer className="max-w-5xl w-full p-2  my-5">
        <div className="h-24 rounded-t-3xl bg-slate-800"></div>
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="">© 2024. All rights reserved.</p>
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <ul className="flex flex-row space-x-2">
                <li className="rounded-full border border-gray-300 bg-gray-300 hover:bg-gray-300 px-2 py-2">
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
                <li className="rounded-full border border-gray-300 bg-gray-300 hover:bg-gray-300 px-2 py-2">
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
      </footer>
    </main>
  )
}
