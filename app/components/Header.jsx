import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-primary">
      yash.</div>
      <nav className="space-x-8 ">
        <Link href="/" className='headings'>Home</Link>
        <Link href="/about" className='headings'>About</Link>
        <Link href="/education" className='headings'>Education</Link>
        <Link href="/works" className='headings'>Works</Link>
        <Link href="/contact" className='headings'>Contact</Link>
      </nav>
      <Link href="/contact">
        <button className="border border-dark px-4 py-2">Let’s talk</button>
      </Link>
    </header>
  )
}
