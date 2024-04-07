import AdminSidebar from "../Components/AdminSidebar";
import Header from "../Components/Header";

const Home = () => {
  return (
<div className="">
      <Header />
      <div className="flex">
        <AdminSidebar />
        <div
          style={{ width: "calc(100% - 250px)" }}
          className="overflow-y-auto min-h-full"
        >
          {/* //Side of the page */}
          <div className="">
            <h3 className="">Please Click some of the sidebar, some are now showing stuff</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;