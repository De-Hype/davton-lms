import AdminSidebar from "../Components/AdminSidebar";
import Header from "../Components/Header";
import Settings from "./Settings";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <AdminSidebar />
        <Settings />
      </div>
    </div>
  );
};

export default Home;
