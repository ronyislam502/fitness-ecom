import { Link } from "react-router-dom";
import SectionTitle from "../../shared/SectionTitle";

const categories = [
  { label: "Cardio Equipment" },
  { label: "Strength Training" },
  { label: "Yoga & Pilates" },
  { label: "Fitness Accessories" },
  { label: "Home Gym Equipment" },
  { label: "Recovery & Wellness" },
];

const Category = () => {
  return (
    <div className="section-gap">
      <SectionTitle title="categories" subTitle="tools we provides" />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {categories.map((category, index) => (
          <Link
            to={"/products"}
            state={category.label}
            key={index}
            className="group flex flex-col gap-y-3 items-center justify-center bg-green-600 rounded-md p-2 cursor-pointer transition duration-300 delay-75"
          >
            <p className="text-xl font-bold text-white group-hover:text-red-600 transition duration-300 delay-75">
              {category.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
