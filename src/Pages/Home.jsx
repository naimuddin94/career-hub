import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Jobs from "../components/Jobs";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <Banner />
      <Jobs jobs={jobs} />
    </div>
  );
};

export default Home;
