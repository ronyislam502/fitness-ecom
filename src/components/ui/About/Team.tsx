import SectionTitle from "../global/SectionTitle";

const Team = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <SectionTitle title={"Team"} subTitle={"team introduction"} />
      <div className="flex lg:flex-row flex-col gap-x-5">
        <div className="flex lg:flex-row flex-col gap-x-5 gap-y-5">
          <img
            src="https://i.postimg.cc/3NzG1Yg8/h1.webp"
            alt="images"
            className="lg:w-[250px] lg:h-[300px] object-cover rounded-md"
          />
          <div className="">
            <h3 className="font-semibold text-xl mb-2">CEO and Co-Founder</h3>
            <h4 className="font-semibold text-lg mb-4">John Smith</h4>
            <p>
              John Smith co-founded Fitness Tools with a vision to revolutionize
              home fitness equipment. With over 15 years of experience in
              product development and business strategy, John leads the company
              with a focus on innovation and customer satisfaction. His
              dedication to fitness stems from a lifelong passion for health and
              wellness.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-x-5">
          <img
            src="https://i.postimg.cc/zXRKBHrV/t1.jpg"
            alt=""
            className="lg:w-[250px] lg:h-[300px] object-cover rounded-md"
          />
          <div className="space-y-5">
            <h3 className="font-semibold text-xl mb-2">
              Chief Marketing Officer
            </h3>
            <h4 className="font-semibold text-lg mb-4">Emily Davis</h4>
            <p>
              Emily Davis drives Fitness Tools' marketing initiatives,
              leveraging her expertise in digital marketing and brand strategy.
              With a background in consumer behavior and market trends, Emily
              ensures that Fitness Tools remains at the forefront of the fitness
              industry, engaging with customers and promoting healthy
              lifestyles.
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="flex lg:flex-row flex-col gap-x-5 gap-y-5">
          <img
            src="https://i.postimg.cc/CKJftjj6/h2.webp"
            alt=""
            className="lg:w-[250px] lg:h-[300px] object-cover rounded-md"
          />
          <div className="">
            <h3 className="font-semibold text-xl mb-2">
              Head of Product Development
            </h3>
            <h4 className="font-semibold text-lg mb-4">Michael Johnson</h4>
            <p>
              Michael Johnson heads the product development team at Fitness
              Tools, bringing a wealth of experience in engineering and design.
              He is committed to creating durable, user-friendly fitness
              equipment that meets the diverse needs of customers. Michael's
              focus on quality and functionality drives the continuous
              improvement of Fitness Tools' product line.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-x-5 gap-y-5">
          <img
            src="https://i.postimg.cc/vBB6dch8/h5.webp"
            alt=""
            className="lg:w-[250px] lg:h-[300px] object-cover rounded-md"
          />
          <div className="">
            <h3 className="font-semibold text-xl mb-2">
              Customer Experience Manager
            </h3>
            <h4 className="font-semibold text-lg mb-4">Sarah Lee</h4>
            <p>
              Sarah Lee is dedicated to enhancing customer satisfaction at
              Fitness Tools. With a background in customer service and
              operations management, Sarah ensures that every customer
              interaction is positive and seamless. She focuses on building
              long-term relationships with customers by understanding their
              needs and providing exceptional support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
