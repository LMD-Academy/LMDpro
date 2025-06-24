import { DashboardLeftSidebar } from '@/components/dashboard/DashboardLeftSidebar';
import { DashboardRightSidebar } from '@/components/dashboard/DashboardRightSidebar';
import { SidebarProvider, SidebarInset, SidebarRail } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-background'>
      <SidebarProvider>
        <DashboardLeftSidebar />
        <SidebarRail />
        <div className="flex flex-1">
          <SidebarInset>{children}</SidebarInset>
          <DashboardRightSidebar />
        </div>
      </SidebarProvider>
    </div>
  );
}
