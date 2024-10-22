import logo from '../assets/logo.jpg';
const Logo = () => {
  return (
    <div className="md:w-[240px] w-fit  flex items-center justify-center bg-white border border-solid border-borders">
      <h1 className="text-3xl font-bold text-[#333547]">
        Max<span className="text-red-400">Files</span>
      </h1>

      {/* <img src={logo} alt="logo" /> */}
    </div>
  );
};
export default Logo;
