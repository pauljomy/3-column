interface CategoryCardProps {
  categoryIcon: string;
  categoryTitle: string;
  categoryDescription: string;
  bgColor: string;
  btnTextColor: string;
}

export default function CategoryCard({
  categoryIcon,
  categoryTitle,
  categoryDescription,
  bgColor,
  btnTextColor,
}: CategoryCardProps) {
  return (
    <div className={`${bgColor} p-12 mx-6 `}>
      <img src={categoryIcon} className={`mb-8`} alt="An icon of sedan" />
      <h3 className={`font-title text-[2.5em] mb-6 `}>{categoryTitle}</h3>
      <p className={`font-description font-light text-[15px] mb-6 leading-7`}>
        {categoryDescription}
      </p>
      <button
        className={`${btnTextColor} rounded-full bg-white py-3 px-8 font-description font-light text-[15px]`}
      >
        Learn More
      </button>
    </div>
  );
}
