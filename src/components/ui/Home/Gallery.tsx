import SectionTitle from "../global/SectionTitle";

const Gallery = () => {
  return (
    <div>
      <SectionTitle title="image-gallery" subTitle="our customers" />
      <div className="photo-gallery flex lg:flex-row flex-col gap-5 lg:px-auto px-4">
        <div className="column">
          <div className="photo">
            <img
              src="https://i.postimg.cc/rs1KFTrs/h12.jpg"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo my-4">
            <img
              src="https://i.postimg.cc/fTsVqVG9/h8.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src="https://i.postimg.cc/g2Sr0NnV/h3.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div className="column mt-2">
          <div className="photo">
            <img
              src="https://i.postimg.cc/Fz4H66B4/h2.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo my-4">
            <img
              src="https://i.postimg.cc/bYxJnzZN/h5.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src="https://i.postimg.cc/pL6Xvr6k/h7.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img
              src="https://i.postimg.cc/3RgK2BJb/h9.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo my-4">
            <img
              src="https://i.postimg.cc/6qctmpZr/h4.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src="https://i.postimg.cc/y6y1dvGD/h1.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img
              src="https://i.postimg.cc/BQhJ5t4s/h10.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo my-4">
            <img
              src="https://i.postimg.cc/MpNx44nF/h15.jpg"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src="https://i.postimg.cc/W3PVpk6m/h6.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
