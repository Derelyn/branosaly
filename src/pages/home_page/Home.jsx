import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import About from "./About";
import Header from "./Header";
import MyPerks from "./MyPerks";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div className="homepage">
      <PageTitle title="Welcome">
        <Navbar />
        <Header />
        <About />
        <MyPerks />
        <Portfolio />
        <Footer />
      </PageTitle>
    </div>
  );
};

export default Home;
