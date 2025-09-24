import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

const HomeLayout = () => {
  return (
    <div className="bg-[#fbfaf8] min-h-screen text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
