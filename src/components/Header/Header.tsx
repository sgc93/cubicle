import Image from 'next/image';
import logo from '../../../public/logo.png';

const Header = () => {
  return (
    <div className="w-screen flex bg-n-800 h-11 px-3 py-2 border-b border-n-300 text-accent-1">
      <Image alt="logo" src={logo} className="w-18" width={72} />
      <div className="flex-1"></div>
    </div>
  );
}

export default Header;
