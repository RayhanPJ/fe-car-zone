import Header from './_components/header';
import Sidebar from './_components/sidebar';
// import { ScrollArea } from '@/components/ui/scroll-area';

export const metadata = {
  title: 'Dashboard - carzone',
};

export default function DashboardLayout({
  children
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden mx-auto max-w-screen-2xl">
        <Header />
        <div className="ml-5">
          {children}
        </div>
      </main>
    </div>
  );
}