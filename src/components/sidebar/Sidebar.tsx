import Image from 'next/image';
import { IoLogoReact, IoBrowsersOutline, IoCalculator, IoFootball, IoHeart } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Data Overview',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Counter Client Side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subtitle: 'Static Generation',
  },
  {
    path: '/dashboard/pokemons/favorites',
    icon: <IoHeart size={40} />,
    title: 'Favorite Pokemons',
    subtitle: 'Global State',
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="left-0 z-10 w-64 min-h-screen overflow-y-scroll bg-gray-900 text-slate-300"
    >
      <div id="logo" style={{ width: '400px' }} className="px-6 my-4">
        <h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-sm text-slate-500">
          Manage your actions and activities
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <span>
            <Image
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="User Avatar"
              width={50}
              height={50}
              priority
            />
          </span>
          <span className="text-sm font-bold md:text-base">
            Benito Martinez
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
