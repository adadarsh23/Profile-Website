import SkeletonBlock from './SkeletonBlock';

export default function ContactSkeleton() {
  return (
    <section className="mx-4 mt-10 min-h-screen overflow-hidden rounded-[2rem] bg-black px-4 py-16 text-white sm:mx-6 sm:px-6 md:mx-12 md:px-12 lg:mx-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <SkeletonBlock className="mb-8 h-10 w-56 sm:h-12 sm:w-72 md:h-14 md:w-96" />
        <SkeletonBlock className="mb-3 h-4 w-full max-w-2xl" />
        <SkeletonBlock className="mb-12 h-4 w-[84%] max-w-xl" />

        <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10">
          <SkeletonBlock className="mb-4 h-8 w-40" />
          <SkeletonBlock className="mb-8 h-4 w-4/5" />

          <div className="space-y-5">
            <div>
              <SkeletonBlock className="mb-2 h-4 w-20" />
              <SkeletonBlock className="h-12 w-full rounded-xl" />
            </div>
            <div>
              <SkeletonBlock className="mb-2 h-4 w-20" />
              <SkeletonBlock className="h-12 w-full rounded-xl" />
            </div>
            <div>
              <SkeletonBlock className="mb-2 h-4 w-24" />
              <SkeletonBlock className="h-32 w-full rounded-xl" />
            </div>
            <SkeletonBlock className="h-12 w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
