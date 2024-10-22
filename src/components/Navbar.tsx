import { RxHamburgerMenu } from 'react-icons/rx';
import Workflow from './Workflow';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import person from '../assets/person.jpg';
import Searchbar from './Searchbar';

interface NavbarProps {
  handleClick: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ handleClick }) => {
  return (
    <div className="h-[73px] bg-white flex items-center w-full px-4 border border-solid border-borders">
      <button
        onClick={handleClick}
        type="button"
        className="lg:hidden block font-semibold text-xl"
      >
        <RxHamburgerMenu />
      </button>
      <nav className="flex gap-4 justify-end lg:justify-normal lg:gap-8 items-center w-full">
        <button
          onClick={handleClick}
          type="button"
          className="hidden lg:block text-3xl font-bold"
        >
          <RxHamburgerMenu />
        </button>

        <Workflow />

        <Searchbar />

        <span className="font-bold text-sm capitalize  gap-1 hidden lg:flex whitespace-nowrap items-center">
          <h4 className="">Damilola odusola</h4>
          <MdOutlineKeyboardArrowDown className="font-bold text-xl" />
        </span>

        <img
          src={person}
          alt="person"
          className="h-8 w-8 rounded-full object-cover block lg:hidden"
        />
      </nav>
    </div>
  );
};
export default Navbar;
