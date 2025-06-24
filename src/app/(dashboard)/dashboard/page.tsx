import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { WelcomeBanner } from '@/components/dashboard/WelcomeBanner';
import { CourseProgress } from '@/components/dashboard/CourseProgress';
import { LearningPath } from '@/components/dashboard/LearningPath';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <DashboardHeader />
      <div className="px-4 sm:px-6 lg:px-8">
        <WelcomeBanner />
        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <CourseProgress />
          </div>
          <div className="lg:col-span-2">
            <LearningPath />
          </div>
        </div>
      </div>
    </div>
  );
}
