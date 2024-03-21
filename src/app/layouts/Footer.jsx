import Link from 'next/link'

function Footer() {
  return (
    <footer className="pt-5 pb-10 container mx-auto max-w-5xl">
      <p className="text-center text-customBrown-300 dark:text-customYellow-500 font-light">
        <Link
          href="https://www.behance.net/gallery/144641409/Personal-Portfolio-Web-Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspire By Maham S.
        </Link>
      </p>
      <p className="text-center text-customBrown-300 dark:text-customYellow-500 font-light">
        © 2024. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
