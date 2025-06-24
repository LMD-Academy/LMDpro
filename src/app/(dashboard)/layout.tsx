import { DashboardLeftSidebar } from '@/components/dashboard/DashboardLeftSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardRightSidebar } from '@/components/dashboard/DashboardRightSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <DashboardLeftSidebar />
        <div className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto">
            <div className="pr-[280px]">{children}</div>
          </main>
        </div>
        <DashboardRightSidebar />
      </div>
    </SidebarProvider>
  );
}
