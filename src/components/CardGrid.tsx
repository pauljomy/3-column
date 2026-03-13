import suvIcon from "../assets/images/icon-suvs.svg";
import luxuryIcon from "../assets/images/icon-luxury.svg";
import sedanIcon from "../assets/images/icon-sedans.svg";
import CategoryCard from "./CategoryCard";

export default function CardGrid() {
  return (
    <div
      className={`my-16 mx-6 text-white  rounded-sm overflow-hidden xl:flex max-w-230 `}
    >
      <CategoryCard
        categoryIcon={sedanIcon}
        categoryTitle="Sedans"
        categoryDescription="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        bgColor="bg-card-sedan"
        btnTextColor="text-card-sedan"
      />
      <CategoryCard
        categoryIcon={suvIcon}
        categoryTitle="SUVs"
        categoryDescription="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        bgColor="bg-card-suv"
        btnTextColor="text-card-suv"
      />
      <CategoryCard
        categoryIcon={luxuryIcon}
        categoryTitle="Luxury"
        categoryDescription="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
        bgColor="bg-card-luxury"
        btnTextColor="text-card-luxury"
      />
    </div>
  );
}
