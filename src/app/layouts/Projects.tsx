import Link from 'next/link'
import Image from 'next/image'

function Projects() {
  return (
    <div className='py-2'>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <div className="border border-0 rounded-lg border-2 bg-customBlue-800 dark:bg-customBlue-500 hover:bg-customBlue-200 hover:text-customBlue-800">
          <Link
            href="https://www.ucunik.com/"
            target="_blank"
            className="flex flex-col"
          >
            <Image
              className="rounded-t-lg -mt-0.5 object-cover object-center md:h-52 lg:h-72"
              src="/static/images/ucunik.png"
              width={500}
              height={500}
              alt="UC UniK"
            />
            <h3 className="my-2 text-center">
              UC UniK Official Website
            </h3>
          </Link>
        </div>
        <div className="border border-0 rounded-lg border-2 bg-customBlue-800 dark:bg-customBlue-500 hover:bg-customBlue-200 hover:text-customBlue-800">
          <Link href="https://play.google.com/store/apps/details?id=com.whale.WhaleFinder.app&hl=zh_TW" target="_blank">
            <Image
              className="rounded-t-lg -mt-0.5 object-cover object-center md:h-52 lg:h-72"
              src="/static/images/whalefinder.png"
              width={500}
              height={500}
              alt="WhaleFinder"
            />
            <h3 className="my-2 text-center">WhaleFinder (Control Panel)</h3>
          </Link>
        </div>
        <div className="border border-0 rounded-lg border-2 bg-customBlue-800 dark:bg-customBlue-500 hover:bg-customBlue-200 hover:text-customBlue-800">
          <Link href="https://www.kaixsean.com" target="_blank">
            <Image
              className="rounded-t-lg -mt-0.5 object-cover object-center md:h-52 lg:h-72"
              src="/static/images/myblog.png"
              width={500}
              height={500}
              alt="kaix blog"
            />
            <h3 className="my-2 text-center">My Blog</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects