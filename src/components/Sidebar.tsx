import sidebarContent from '../constant/data-json';
import clsx from 'clsx';

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <aside
      className={clsx(
        `w-[240px] bg-[#333547] absolute lg:relative z-50 lg:z-0 min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] transition-all ease-in-out duration-200`,
        isSidebarOpen
          ? 'ml-0 w-[240px]'
          : 'lg:w-[80px] w-[240px] -ml-[240px] lg:ml-0'
      )}
    >
      <ul className="">
        {sidebarContent.map((item) => {
          const { id, title, icon } = item;

          return (
            <li
              key={id}
              className="py-4 hover:bg-[#232433] justify-center hover:text-gray-300 duration-500 text-gray-400"
            >
              <a
                href=""
                className={clsx(
                  `flex gap-3 items-center`,
                  isSidebarOpen ? ' pl-4' : 'justify-center'
                )}
              >
                {icon}
                <p
                  className={clsx(
                    `transition-all duration-700 ease-in-out`,
                    isSidebarOpen ? 'block' : 'hidden'
                  )}
                >
                  {title}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
