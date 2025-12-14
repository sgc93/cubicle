import Image from 'next/image';
import logo from '../../../public/logo.png';

const Header = () => {
  return (
    <div className="flex bg-n-800 h-12 px-3 py-2 border-b border-n-300 text-accent-1">
      <Image alt='logo' src={logo} className="w-18" width={72}/>
      <div className="grow flex items-center gap-3 justify-between">
        <div className="grow flex items-center gap-3 px-5"></div>
        <button
          id="toggle-sidebar-btn"
          className="md:hidden relative flex items-center justify-center cursor-pointer p-1 rounded-md transition-all duration-300 bg-accent-1/80"
        >
          <svg
            id="sidebar-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
            className="w-5 h-5 transition-all duration-500"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 2h-9a1 1 0 0 0 -.993 .883l-.007 .117v12a1 1 0 0 0 .883 .993l.117 .007h9v-14zm-5.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
