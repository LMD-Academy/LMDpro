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
      <div className="group/layout min-h-screen bg-background">
        <DashboardLeftSidebar />
        <div className="pr-[56px] transition-all duration-300 ease-in-out group-data-[sidebar-state=collapsed]/sidebar-wrapper:pl-[var(--sidebar-width-icon)] group-data-[sidebar-state=expanded]/sidebar-wrapper:pl-[var(--sidebar-width)]">
          <DashboardHeader />
          <main className="p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
        <DashboardRightSidebar />
      </div>
    </SidebarProvider>
  );
}
