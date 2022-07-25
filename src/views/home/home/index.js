import HomePage from "./homePage";
import { useHome } from "./useHome";

export const Home = () => {
  const { data } = useHome();

  console.log("holas data", data);

  return <HomePage></HomePage>;
};

export default Home;
