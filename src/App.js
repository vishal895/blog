import Footer from "./component/Footer";
import Hero from "./component/hero";
import NavBar from "./component/navbar";
import RecentPosts from "./component/recentPosts/recentPosts";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <RecentPosts />
      <Footer />
    </>
  );
};

export default App;
