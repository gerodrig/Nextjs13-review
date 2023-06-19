import { WidgetsGrid } from '@/components/';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin',
};

export default function MainPage() {
  return (
    <div className="text-black p2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-gray-500">Welcome to the dashboard</span>

      <WidgetsGrid />
    </div>
  );
}
