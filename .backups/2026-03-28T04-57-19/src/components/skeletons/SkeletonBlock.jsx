export default function SkeletonBlock({
  className = '',
  rounded = 'rounded-2xl',
}) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse bg-white/8 ${rounded} ${className}`}
    />
  );
}
