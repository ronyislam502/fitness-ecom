import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import SectionTitle from "../global/SectionTitle";

const Contact = () => {
  return (
    <div>
      <SectionTitle
        title={"Contact Information"}
        subTitle={"don't forget to send feedback"}
      />
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-y-5">
        <div className="">
          <h3 className="text-xl font-medium mb-4">Address:</h3>
          <p>Fitness Tools Headquarters</p>
          <p>1234 Fitness Lane</p>
          <p>Health City, Wellness State, 56789</p>
        </div>

        <div className="">
          <h3 className="text-xl font-medium mb-4">Customer Service:</h3>
          <p className="flex items-center gap-x-3">
            <FaSquarePhone className="text-secondaryColor text-lg" /> (123)
            456-7890
          </p>
          <p className="flex items-center gap-x-3">
            <MdEmail className="text-secondaryColor text-lg" />
            <a
              href="mailto:support@fitnesstools.com"
              className="text-primaryColor"
            >
              support@fitnesstools.com
            </a>
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-medium mb-4">Business Hours:</h3>
          <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="">
          <h3 className="text-xl font-medium mb-4">Follow Us:</h3>
          <p className="flex items-center gap-x-3 ">
            <FaFacebookSquare className="text-secondaryColor text-lg" />
            <a
              href="https://www.facebook.com/fitnesstools"
              className="text-primaryColor"
            >
              facebook.com/fitnesstools
            </a>
          </p>
          <p className="flex items-center gap-x-3 ">
            <FaTwitterSquare className="text-secondaryColor text-lg" />
            <a
              href="https://www.twitter.com/fitnesstools"
              className="text-primaryColor"
            >
              twitter.com/fitnesstools
            </a>
          </p>
          <p className="flex items-center gap-x-3 ">
            <FaInstagramSquare className="text-secondaryColor text-lg" />
            <a
              href="https://www.instagram.com/fitnesstools"
              className="text-primaryColor"
            >
              instagram.com/fitnesstools
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
