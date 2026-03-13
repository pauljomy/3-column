import suvIcon from "../assets/images/icon-suvs.svg";
import CategoryCard from "./CategoryCard";

export default function CardGrid() {
  return (
    <div className={`my-16 text-white`}>
      <CategoryCard
        categoryIcon={suvIcon}
        categoryTitle="Sedans"
        categoryDescription="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        bgColor="card-sedan"
        btnTextColor="text-card-sedan"
      />
    </div>
  );
}
