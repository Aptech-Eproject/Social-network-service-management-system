import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Edunext</h1>
          <nav className="flex gap-4">
            <a href="/courses" className="hover:text-blue-600">Courses</a>
            <a href="/profile" className="hover:text-blue-600">Profile</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
