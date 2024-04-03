import AdminSidebar from "../Components/AdminSidebar";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <AdminSidebar />
        <div className="">This is the Admin</div>
      </div>
    </div>
  );
};

export default Home;
