import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../global/SectionTitle";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Smith",
      comment:
        "I love the quality and variety of fitness equipment available. It has really helped me stay motivated in my fitness journey!",
    },
    {
      name: "John Doe",
      comment:
        "Excellent customer service! I had a query about a product and received prompt and helpful assistance. Highly recommended.",
    },
    {
      name: "Sarah Johnson",
      comment:
        "The products are top-notch and reasonably priced. I've recommended Fitness Tools to all my friends.",
    },
    {
      name: "Michael Brown",
      comment:
        "Fast delivery and the products arrived in perfect condition. Will definitely shop here again.",
    },
    {
      name: "Jessica Martinez",
      comment:
        "Great experience shopping here! The website is easy to navigate, and I found exactly what I needed.",
    },
    {
      name: "David Wilson",
      comment:
        "The home gym equipment I bought exceeded my expectations. Thank you for helping me set up my home gym!",
    },
  ];
  console.log(testimonials);
  return (
    <div>
      <SectionTitle
        title={"Testimonials"}
        subTitle={"our satisfied customers"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonials?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center my-26 m-24">
              <p className="py-6">{item.name}</p>
              <h3 className="text-2xl text-orange-400">{item.comment}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
