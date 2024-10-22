import { useState } from 'react';
import clsx from 'clsx';

function ToggleSwitch() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className=" items-center space-x-1 text-sm 2xl:text-lg hidden xl:flex">
      {/* User label */}
      <span
        className={clsx(!isAdmin ? 'text-black font-bold' : 'text-gray-500')}
      >
        User
      </span>

      {/* Toggle Switch */}
      <div
        className={clsx(
          'relative inline-flex items-center h-[32.08px] w-[53.2px] rounded-full border-2 transition-colors cursor-pointer  border-solid border-black bg-transparent'
          //   isAdmin
          //     ? 'bg-blue-500 border-blue-500'
          //     : 'bg-gray-200 border-gray-400'
        )}
        onClick={() => setIsAdmin(!isAdmin)}
      >
        {/* Toggle Ball */}
        <span
          className={clsx(
            'absolute top-[7px] left-0.5 h-4 w-4 rounded-full border-2 border-solid border-black transition-transform transform bg-[#626ED4]',
            isAdmin ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </div>

      {/* Admin label */}
      <span
        className={clsx(isAdmin ? 'text-black font-bold' : 'text-gray-500')}
      >
        Admin
      </span>
    </div>
  );
}

export default ToggleSwitch;
