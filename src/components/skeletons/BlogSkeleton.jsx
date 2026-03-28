import SkeletonBlock from './SkeletonBlock';

export default function BlogSkeleton() {
  return (
    <section className="mx-4 mt-10 min-h-screen rounded-[2rem] bg-black px-4 py-16 text-white sm:mx-6 sm:px-6 md:mx-12 md:px-12 lg:mx-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <SkeletonBlock className="mb-8 h-10 w-56 sm:h-12 sm:w-72 md:mb-12 md:h-14 md:w-96" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4"
            >
              <SkeletonBlock className="mb-4 aspect-[4/3] w-full rounded-[1.4rem]" />
              <SkeletonBlock className="mb-3 h-5 w-2/3" />
              <SkeletonBlock className="mb-2 h-4 w-full" />
              <SkeletonBlock className="mb-2 h-4 w-[88%]" />
              <SkeletonBlock className="h-4 w-[60%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
