import SectionTitle from "../global/SectionTitle";

const AboutUs = () => {
  return (
    <div className="px-4">
      <SectionTitle title={"About us"} subTitle={"who we are"} />
      <div className="flex lg:flex-row flex-col justify-between gap-x-5 gap-y-5">
        <img
          src="https://i.postimg.cc/8kXmsVfn/about1.jpg"
          alt=""
          className="lg:w-[35%] w-full rounded-md"
        />
        <div>
          <h2 className="heading mb-4">History of Fitness Tools</h2>
          <p>
            Fitness Tolls was founded in 2024 with the aim of revolutionizing
            the fitness equipment industry. Recognizing the growing demand for
            high-quality, affordable fitness products, our founders set out to
            create a brand that would meet the needs of fitness enthusiasts of
            all levels. From humble beginnings as a small startup, Fitness Tolls
            has grown into a leading e-commerce platform, serving thousands of
            customers across Bangladesh.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse justify-between gap-x-5 gap-y-5">
        <div className="space-y-5">
          <div>
            <h2 className="heading mb-4">Our Mission</h2>
            <p>
              Our mission at Fitness Tolls is to empower individuals to lead
              healthier, more active lives by providing them with the best
              fitness equipment and accessories. We are committed to offering
              products that combine innovation, quality, and affordability,
              ensuring that everyone has the opportunity to achieve their
              fitness goals.
            </p>
          </div>
          <div>
            <h2 className="heading mb-4">Our Vision</h2>
            <p>
              Our vision is to become the most trusted and respected fitness
              equipment brand globally. We strive to continuously innovate and
              expand our product range, staying ahead of the latest fitness
              trends and technologies. At Fitness Tolls, we envision a world
              where fitness is accessible to all, and we aim to inspire and
              support our customers on their journey to better health and
              wellness.
            </p>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/PJJbKS94/about2.webp"
          alt=""
          className="lg:w-[35%] w-full rounded-md lg:mt-0 mt-5"
        />
      </div>
    </div>
  );
};

export default AboutUs;
