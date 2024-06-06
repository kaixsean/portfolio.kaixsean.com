'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'

function Navbar() {
  const [visible, setVisible] = useState(true)
  const handleToggle = () => {
    setVisible(!visible)
  }
  const gotoAside = () => {
    setVisible(!visible)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-10 border-b border-customBrown-500/10 backdrop-blur shadow">
      <div className="flex flex-row justify-between items-center container mx-auto max-w-5xl p-3">
        <div>
          <Image
            className="m-auto"
            src="/logo.png"
            alt="logo"
            width={32}
            height={32}
          />
        </div>
        <div className="md:hidden flex items-center">
          <button aria-label="Toggle Menu" onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={clsx(
                'h-8 w-8 text-gray-900 dark:text-gray-100',
                visible ? '' : 'hidden'
              )}
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={clsx(
                'h-8 w-8 text-gray-900 dark:text-gray-100',
                visible ? 'hidden' : ''
              )}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            onClick={gotoAside}
            className={clsx(
              'fixed right-0 top-14 h-screen w-full bg-gray-200/90 transition-all duration-300 ease-in-out dark:bg-gray-950/90 translate-x-0',
              visible ? 'hidden' : ''
            )}
          >
            <div className="flex justify-end"></div>
            <nav className="fixed mt-8 h-full">
              <div className="px-12 py-4">
                <a
                  className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  href="#about"
                >
                  About
                </a>
              </div>
              <div className="px-12 py-4">
                <a
                  className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  href="#skills"
                >
                  Skills
                </a>
              </div>
              <div className="px-12 py-4">
                <a
                  className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
        <ul id="menu-mobile" className="hidden md:flex flex-row space-x-5">
          <li className="text-xl hover:text-amber-500">
            <Link href="/#about">About</Link>
          </li>
          <li className="text-xl hover:text-amber-500">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="text-xl hover:text-amber-500">
            <Link href="/experiences">Experiences</Link>
          </li>
          <li className="text-xl hover:text-amber-500">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
