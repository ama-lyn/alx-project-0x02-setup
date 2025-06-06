import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Amanda</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className='hover:text-yellow-400 cursor:pointer'>
              <Link href="/home" className='cursor:pointer'/>
              Home
            </li>
            <li className="hover:text-yellow-400 cursor:pointer">
              <Link href="/about" className='cursor:pointer'/>
              About
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
