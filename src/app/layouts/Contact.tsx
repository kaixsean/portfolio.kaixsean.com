import EmailIcon from '/public/icons/email.svg'
import LocationIcon from '/public/icons/location-pin.svg'
import LinkedinIcon from '/public/icons/linkedin.svg'
import GithubIcon from '/public/icons/github.svg'

function Contact() {
  return (
    <div className="relative py-5">
      <div className="flex flex-row">
        <div className="basis-1/3 border-y border-y-customBlue-800 dark:border-y-customBlue-500 bg-customBlue-800 dark:bg-customBlue-500 h-48"></div>
        <div className="basis-1/3 bg-customBlue-800 dark:bg-customBlue-500 h-48"></div>
        <div className="basis-1/3 border-y border-y-customBlue-800 dark:border-y-customBlue-500 bg-customBlue-800 dark:bg-customBlue-500 h-48"></div>
      </div>
      <div className="absolute inset-x-0 top-0">
        <div className="container mx-auto max-w-5xl">
          <h6 id="contact" className="text-center text-3xl">
            Contact Me
          </h6>
          <div className="flex flex-row space-x-3 justify-center my-14">
            <div className="border px-3 py-2 rounded border-customBlue-500 dark:border-customBlue-500 bg-customBlue-500 dark:bg-customBlue-800">
              <a
                href="mailto: me@kaixsean.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-3"
              >
                <EmailIcon fill="white" width="24" height="24" />
                <span className="text-customBeige-500 dark:text-customBeige-500 font-light text-sm">
                  me@kaixsean.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-1">
        <div className="flex flex-col items-center">
          <ul className="flex flex-row space-x-3">
            <li>
              <a
                href="https://github.com/kaixsean"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon fill="white" width="32" height="32" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kaixiangchen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon fill="white" width="32" height="32" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
