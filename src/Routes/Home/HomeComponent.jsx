import CategoryContainer from "../../Components/Cateogry-Container/CategoryContainer";
import { categories } from "../../categoryData";

const Home = () => {
  return (
    <div>
      <CategoryContainer categories={categories} />;
    </div>
  );
};

export default Home;
