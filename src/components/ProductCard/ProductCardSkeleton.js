export default function ProductCardSkeleton() {
  return (
    <div className="p-4 border-b animate-pulse border-opacity-25">
      <div className="h-cardphoto rounded mb-3 bg-gray-300" />
      <div className="w-100 h-6 mb-3 rounded bg-gray-300" />
      <div className="w-1/3 h-8 float-right rounded bg-gray-300" />
    </div>
  );
}
