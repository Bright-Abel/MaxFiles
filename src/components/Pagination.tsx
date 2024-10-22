import clsx from 'clsx';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="flex items-center w-full justify-end  mt-4">
      <div className="border border-solid border-gray-400 text-[#8383e6] flex items-center rounded-md">
        <button
          className="md:px-3  px-1 py-1 rounded-tl-md rounded-bl-md"
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex ">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={clsx(
                `px-3 py-1 border-l  border-solid border-gray-400`,
                currentPage === index + 1 && 'bg-[#8383e6] text-white',
                index + 1 === totalPages && 'border-r'
              )}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="md:px-3 px-1 py-1 rounded-tr-md rounded-br-md"
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Pagination;
