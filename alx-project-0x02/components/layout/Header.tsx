import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Amanda</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-yellow-400 cursor:pointer">
              <Link href="/home">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-400 cursor:pointer">
              <Link href="/about">
                About
              </Link>
            </li>
            <li className="hover:text-yellow-400 cursor:pointer">
              <Link href="/posts">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
