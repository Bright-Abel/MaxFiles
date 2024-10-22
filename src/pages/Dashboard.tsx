import { UserDashboard, Sidebar, Navbar } from '../components';
import { useState } from 'react';
import Logo from '../components/Logo';
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="w-full relative">
      <div className="grid w-full grid-cols-[auto_1fr]">
        <Logo />
        <Navbar handleClick={handleClick} />
      </div>
      <div className="lg:grid w-full lg:grid-cols-[auto_1fr] relative">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className="bg-[#ECECF1] px-2 md:px-4 lg:px-6 py-12 xl:px-10 h-[calc(100vh-73px)] w-full overflow-y-auto border border-solid border-borders">
          <UserDashboard />
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
