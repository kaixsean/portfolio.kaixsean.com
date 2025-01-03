import Image from 'next/image'

function Intro() {
  return (
    <div className="border-b border-customBlue-500 dark:border-customBlue-800 border-b-2 shadow-lg">
      <div className="container mx-auto max-w-5xl py-10 px-5">
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between">
          <div className="">
            <div className="flex flex-row space-x-3">
              <div className="text-2xl md:text-2xl lg:text-3xl">I&apos;M</div>
              <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold leading-7 md:leading-8 lg:leading-9 text-customBeige-500">
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
              className="rounded-full border-8 border-customBlue-200"
              src="/avatar.png"
              alt="Kaix"
              width={260}
              height={260}
            />
          </div>
          <div className="hidden md:block">
            <Image
              className="rounded-full border-8 border-customBlue-200"
              src="/avatar.png"
              alt="Kaix"
              width={480}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
