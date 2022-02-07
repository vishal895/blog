import Footer from "./components/Footer";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import RecentPosts from "./components/recentPosts/recentPosts";
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