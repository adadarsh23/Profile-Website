import SkeletonBlock from './SkeletonBlock';

export default function SampleSkeleton() {
  return (
    <section className="min-h-screen bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <SkeletonBlock className="mb-8 h-10 w-56 sm:h-12 sm:w-72 md:mb-12 md:h-14 md:w-96" />
        </div>

        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center"
            >
              <SkeletonBlock className="h-20 w-20 rounded-2xl sm:h-24 sm:w-24" />
              <div className="flex-1">
                <SkeletonBlock className="mb-3 h-5 w-2/3" />
                <SkeletonBlock className="mb-3 h-4 w-full" />
                <SkeletonBlock className="h-4 w-1/2" />
              </div>
              <SkeletonBlock className="h-11 w-32 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
