function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <h2 className="text-xl font-bold">My Website</h2>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar