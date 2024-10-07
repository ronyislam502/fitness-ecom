import SectionTitle from "../../shared/SectionTitle";

const Benefits = () => {
  return (
    <div className="section-gap">
      <SectionTitle title="benefit" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img
            src="https://i.postimg.cc/NFPr5H7M/Benefits1.webp"
            alt=""
            className="lg:w-[400px] w-[60%] lg:h-[400px] object-cover rounded-md"
          />
        </div>
        <div>
          <p className="mt-5 text-xl font-bold">
            Benefits of Fitness Products from Fitness Tolls!
          </p>
          <p className="py-4">
            At Fitness Tolls, our range of fitness equipment offers numerous
            benefits to enhance your workout experience and overall health.
            Treadmills provide a versatile and convenient way to improve
            cardiovascular health, burn calories, and stay active indoors,
            regardless of weather conditions. Exercise bikes offer a low-impact
            cardiovascular workout that is gentle on the joints, making them
            ideal for users of all fitness levels. Dumbbells and kettlebells
            help in building strength and muscle tone while improving
            flexibility and balance. Weight benches and power racks are
            essential for safe and effective strength training, supporting a
            variety of exercises to target different muscle groups. Lastly,
            workout gloves ensure a secure grip and protect your hands during
            intense lifting sessions. With Fitness Tolls, you can achieve your
            fitness goals with high-quality, reliable equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
