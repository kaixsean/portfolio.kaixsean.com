import About from './layouts/About'
import Contact from './layouts/Contact'
import Footer from './layouts/Footer'
import Intro from './layouts/Intro'
import Navbar from './layouts/Navbar'
import Projects from './layouts/Projects'
import SkillSide from './layouts/SkillSide'

const BackendDATA = [
  { id: 'backend-01', name: 'PHP', src: 'php.svg' },
  { id: 'backend-02', name: 'Python', src: 'python.svg' },
  { id: 'backend-03', name: 'MySQL', src: 'mysql-logo.svg' },
  { id: 'backend-04', name: 'MongoDB', src: 'mongodb.svg' },
  { id: 'backend-05', name: 'Linux', src: 'linux.svg' },
  { id: 'backend-06', name: 'Laravel', src: 'laravel.svg' },
  { id: 'backend-07', name: 'Codeigniter', src: 'codeigniter.svg' },
  { id: 'backend-08', name: 'MariaDB', src: 'mariadb.svg' },
]

const FrontendDATA = [
  { id: 'frontend-01', name: 'JavaScript', src: 'js.svg' },
  { id: 'frontend-02', name: 'Tailwind CSS', src: 'tailwindcss.svg' },
  { id: 'frontend-03', name: 'Bootstrap', src: 'bootstrap.svg' },
  { id: 'frontend-04', name: 'jQuery', src: 'jquery.svg' },
  { id: 'frontend-05', name: 'HTML', src: 'html-5.svg' },
  { id: 'frontend-06', name: 'CSS', src: 'css-3.svg' },
  { id: 'frontend-07', name: 'Vue', src: 'vue.svg' },
]

const OtherDATA = [
  { id: 'other-01', name: 'Flutter', src: 'flutter.svg' },
  { id: 'other-02', name: 'Google Cloud Platform', src: 'google-cloud.svg' },
  { id: 'other-03', name: 'AWS', src: 'aws-logo.svg' },
  { id: 'other-04', name: 'Git Source Control', src: 'git.svg' },
]

export default function Home() {
  return (
    <main className="bg-custom-blue-500 dark:bg-custom-blue-800">
      <Navbar />
      <div className="min-h-screen pb-5">
        <Intro />
        <About />
        <div className="px-2 my-5 container mx-auto max-w-5xl py-10">
          <h3 id="skills" className="text-5xl text-center my-3">
            Skills
          </h3>
          <SkillSide skills={BackendDATA} />
          <SkillSide skills={FrontendDATA} />
          <SkillSide skills={OtherDATA} />
        </div>
        <div className="px-2 my-5 container mx-auto max-w-5xl py-10">
          <h3 id="projects" className="text-5xl text-center my-3">
            Projects
          </h3>
          <Projects />
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
