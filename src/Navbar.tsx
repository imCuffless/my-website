function Navbar() {
  return (
    <nav className="border-b border-border px-8 py-4 flex justify-between items-center">
      <h2 className="text-accent text-xl font-bold">Alexis</h2>
      <ul className="flex gap-6">
        <li className="text-muted cursor-pointer hover:text-white transition-colors">About</li>
        <li className="text-muted cursor-pointer hover:text-white transition-colors">Skills</li>
        <li className="text-muted cursor-pointer hover:text-white transition-colors">Journey</li>
        <li className="text-muted cursor-pointer hover:text-white transition-colors">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar