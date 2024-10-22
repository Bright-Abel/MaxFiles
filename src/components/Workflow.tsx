import { useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { workflowDropdowns } from '../constant/data-json';

import clsx from 'clsx';
const Workflow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-fit text-left hidden md:block">
      <button
        // onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
        onClick={handleClick}
        type="button"
        className={clsx(
          'inline-flex items-center gap-1 whitespace-nowrap font-bold text-sm 2xl:text-lg capitalize justify-center w-full px-2 py-1 bg-blue border border-solid  border-borders text-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75',
          isOpen ? 'rounded-t-md' : 'rounded-md '
        )}
      >
        <p className="">Initiate workflow</p>
        <span className="font-bold text-xl">
          {' '}
          {isOpen ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowUp />
          )}
        </span>
      </button>

      {/* Dropdown Content */}
      <div
        className={clsx(
          `z-50`,
          isOpen
            ? 'opacity-100 block  translate-y-0'
            : 'opacity-0 hidden -translate-y-4 ',
          'transition-all border border-solid corder-borders duration-700 ease-in-out absolute left-0 w-full  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none rounded-b-md '
        )}
      >
        <div className="px-2 bg-index py-1">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="w-full border pl-2 border-solid border-borders rounded-md outline-none"
          />
        </div>
        <div className="mt-2">
          {workflowDropdowns.map((dropdown, index) => (
            <div className={clsx(index % 2 === 0 && 'bg-index')} key={index}>
              <a
                href="#"
                className="block py-1 pl-2 font-bold text-sm text-gray-700 hover:bg-gray-100"
              >
                {dropdown}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
