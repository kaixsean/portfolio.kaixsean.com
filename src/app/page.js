import Image from 'next/image'
import Navbar from './layouts/Navbar'
import Intro from './layouts/Intro'
import About from './layouts/About'
import SkillSide from './layouts/SkillSide'
import Contact from './layouts/Contact'
import Footer from './layouts/Footer'

const BackendDATA = [
  { name: 'PHP', src: 'php.svg' },
  { name: 'Python', src: 'python.svg' },
  { name: 'MySQL', src: 'mysql-logo.svg' },
  { name: 'MongoDB', src: 'mongodb.svg' },
  { name: 'Linux', src: 'linux.svg' },
]

const FrontendDATA = [
  { name: 'JavaScript', src: 'js.svg' },
  { name: 'Tailwind CSS', src: 'tailwindcss.svg' },
  { name: 'Bootstrap', src: 'bootstrap.svg' },
  { name: 'jQuery', src: 'jquery.svg' },
  { name: 'HTML', src: 'html-5.svg' },
  { name: 'CSS', src: 'css-3.svg' },
]

const OtherDATA = [
  { name: 'Flutter', src: 'flutter.svg' },
  { name: 'Google Cloud Platform', src: 'google-cloud.svg' },
  { name: 'Git Source Control', src: 'git.svg' },
]

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="min-h-screen pb-5">
        <Intro />
        <About />
        <div className="px-2 my-5 container mx-auto max-w-5xl py-10">
          <div className="text-5xl text-center my-3">Skills</div>
          <SkillSide skills={BackendDATA} />
          <SkillSide skills={FrontendDATA} />
          <SkillSide skills={OtherDATA} />
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
