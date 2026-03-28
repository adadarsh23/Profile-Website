import SkeletonBlock from './SkeletonBlock';

export default function NotFoundSkeleton() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
      <SkeletonBlock className="mb-6 h-28 w-48 sm:h-36 sm:w-64 md:h-44 md:w-80" />
      <SkeletonBlock className="mb-3 h-5 w-64" />
      <SkeletonBlock className="h-4 w-48" />
    </section>
  );
}
