import SideMenu from "./SideMenu";
import Content from "./Content";

export default function MainSecrion() {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-layout gap-4">
        <div className="p-6 bg-white rounded-md min-h-screen border border-gray-200">
          <SideMenu />
        </div>
        <div className="px-8 py-6 bg-white rounded-md border border-gray-200">
          <Content />
        </div>
      </div>
    </div>
  );
}
