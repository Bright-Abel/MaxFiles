import ToggleSwitch from './ToggleSwitch';
import { RiUpload2Fill } from 'react-icons/ri';
import { IoSearchOutline } from 'react-icons/io5';
const Searchbar = () => {
  return (
    <section className="lg:flex-1">
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1 bg-[#F8F8FA] hidden lg:flex border border-solid border-borders rounded-md py-1 pl-1 items-center gap-2">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="w-full border pl-2 border-solid max-w-[95%] border-borders rounded-md outline-none"
          />
        </div>
        <button
          type="button"
          className="  font-bold text-[#626ED4] text-lg lg:hidden  h-8 w-8 rounded-full bg-blue items-center flex justify-center "
        >
          <IoSearchOutline />
        </button>

        <button
          type="button"
          className="px-2 py-1 bg-blue hidden lg:flex text-black border border-solid border-borders font-bold text-sm 2xl:text-lg rounded-md "
        >
          Search
        </button>
        <button
          type="button"
          className="  font-bold text-[#626ED4] text-lg xl:hidden  h-8 w-8 rounded-full bg-blue items-center flex justify-center "
        >
          <RiUpload2Fill />
        </button>
        <button
          type="button"
          className="px-2 py-1 bg-blue capitalize whitespace-nowrap hidden xl:block  text-black border border-solid border-borders font-bold text-sm 2xl:text-lg rounded-md "
        >
          upload file
        </button>
        {/* TOGGLE */}
        <ToggleSwitch />
      </div>
    </section>
  );
};
export default Searchbar;
