export const SkeletonPreview = () => (
  <div className="w-full max-w-45 flex gap-3">
    <div className="size-10 rounded-full bg-[#233648]" />
    <div className="flex-1 flex flex-col gap-2 justify-center">
      <div className="h-3 w-full bg-[#233648] rounded" />
      <div className="h-3 w-2/3 bg-[#233648] rounded" />
    </div>
  </div>
);
