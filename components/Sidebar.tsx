// components/Sidebar.tsx
'use client';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar flex flex-col justify-start items-center  md:overflow-hidden overflow-auto md:hover:overflow-auto gap-3 px-16 max-sm:hidden sticky ">
      <div className='flex flex-col justify-center items-center mt-10 gap-10'>
      <Link className='text-2xl font-bold hover:text-stone-600 text-slate-950' href="/">Home</Link>
      <Link className='text-2xl font-bold hover:text-stone-600 text-slate-950' href="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Sidebar;
