import { getAccessToken } from '@/lib/server/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const token = await getAccessToken();
  
  if (!token) {
    redirect('/auth/login');
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome to your dashboard</p>
    </div>
  );
}
