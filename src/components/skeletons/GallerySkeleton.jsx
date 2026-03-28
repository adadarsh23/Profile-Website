import SkeletonBlock from './SkeletonBlock';

export default function GallerySkeleton() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <SkeletonBlock className="mb-8 h-10 w-64 sm:h-12 sm:w-80 md:mb-12 md:h-14 md:w-[28rem]" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonBlock
              key={index}
              className={`w-full rounded-[1.75rem] ${
                index % 3 === 0
                  ? 'aspect-[4/5]'
                  : index % 3 === 1
                    ? 'aspect-square'
                    : 'aspect-[5/4]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
