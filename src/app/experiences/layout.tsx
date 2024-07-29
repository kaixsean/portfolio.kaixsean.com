import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full bg-customBlue-500 dark:bg-customBlue-800">
      <Navbar />
      <div>
        <div className="min-h-screen pt-14">{children}</div>
      </div>
      <Footer />
    </main>
  )
}
