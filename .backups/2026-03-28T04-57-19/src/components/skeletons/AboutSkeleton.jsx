import SkeletonBlock from './SkeletonBlock';

export default function AboutSkeleton() {
  return (
    <section className="mx-4 mt-10 min-h-screen rounded-[2rem] bg-black px-4 py-16 text-white sm:mx-6 sm:px-6 md:mx-12 md:px-12 lg:mx-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <SkeletonBlock className="mb-8 h-10 w-56 sm:h-12 sm:w-72 md:mb-12 md:h-14 md:w-96" />
        <SkeletonBlock className="mb-4 h-4 w-full max-w-3xl" />
        <SkeletonBlock className="mb-4 h-4 w-[92%] max-w-2xl" />
        <SkeletonBlock className="mb-16 h-4 w-[76%] max-w-xl" />

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <SkeletonBlock className="mb-5 h-6 w-2/3" />
              <SkeletonBlock className="mb-3 h-4 w-full" />
              <SkeletonBlock className="mb-3 h-4 w-[90%]" />
              <SkeletonBlock className="h-4 w-[70%]" />
            </div>
          ))}
        </div>

        <SkeletonBlock className="mt-16 h-12 w-40 rounded-full" />
      </div>
    </section>
  );
}
