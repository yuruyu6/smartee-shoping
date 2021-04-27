export default function Promo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="col-start-1 col-end-4 row-start-1 row-end-3 py-10 flex">
        <div className="bg-white w-full flex-none rounded-3xl" />
        <div className="w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-blue-400 to-blue-500 rotate-1"> dsada</div>
      </div>
      <div className="relative col-start-1 col-end-2 self-center rounded-3xl transform shadow-lg ">
        <h1 className="py-12 px-20">text</h1>
        <h1 className="py-12 px-20">text</h1>
        <h1 className="py-12 px-20">text</h1>
      </div>
      <div className="relative w-full col-start-2 col-end-3rounded-3xl transform shadow-lg ">
        <h1 className="py-12 px-20">text</h1>
        <h1 className="py-12 px-20">text</h1>
        <h1 className="py-12 px-20">text</h1>
      </div>
      <div className="relative w-full col-start-3 col-end-4  rounded-3xl transform shadow-lg ">
        <h1 className="py-12 px-20">text</h1>
        <h1 className="py-12 px-20">text</h1>
        <h1 className="py-12 px-20">text</h1>
      </div>
    </div>
  );
}
