import AdminSidebar from "../Components/AdminSidebar"
import Header from "../Components/Header"

const Reports = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
      <AdminSidebar defaultLink={"reports"} />
        <div
          style={{ width: "calc(100% - 250px)" }}
          className="overflow-y-auto min-h-full"
        >
          {/* //Side of the page */}
          <div className="">
            <h3 className="">This page is not included</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports