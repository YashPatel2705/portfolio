import './styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: "My Portfolio",
  description: "Hi, I'm Yash, a website and application developer based in Waterloo with expertise in design, development .",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-bgcolor min-h-screen'>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
