import Image from 'next/image'
import Link from 'next/link'

function Projects() {
  return (
    <div className='py-2'>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <div className="border border-0 rounded-lg border-2 bg-custom-blue-800 dark:bg-custom-blue-500 hover:bg-custom-blue-200 hover:text-custom-blue-800">
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
            <h4 className="my-2 text-center">
              UC UniK Official Website
            </h4>
          </Link>
        </div>
        <div className="border border-0 rounded-lg border-2 bg-custom-blue-800 dark:bg-custom-blue-500 hover:bg-custom-blue-200 hover:text-custom-blue-800">
          <Link href="https://play.google.com/store/apps/details?id=com.whale.WhaleFinder.app&hl=zh_TW" target="_blank">
            <Image
              className="rounded-t-lg -mt-0.5 object-cover object-center md:h-52 lg:h-72"
              src="/static/images/whalefinder.png"
              width={500}
              height={500}
              alt="WhaleFinder"
            />
            <h4 className="my-2 text-center">WhaleFinder (Control Panel)</h4>
          </Link>
        </div>
        <div className="border border-0 rounded-lg border-2 bg-custom-blue-800 dark:bg-custom-blue-500 hover:bg-custom-blue-200 hover:text-custom-blue-800">
          <Link href="https://www.kaixsean.com" target="_blank">
            <Image
              className="rounded-t-lg -mt-0.5 object-cover object-center md:h-52 lg:h-72"
              src="/static/images/myblog.png"
              width={500}
              height={500}
              alt="kaix blog"
            />
            <h4 className="my-2 text-center">My Blog</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects