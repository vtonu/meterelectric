import { MoveUp } from "lucide-react";
import emailjs from "emailjs-com";
import { PhoneCall } from "lucide-react";
import { useRef, useState } from "react";
import backgroundImage from "../assets/backgroundwires2.png";
import aboutUsImage from "../assets/about-us.png";

const Contacts = ({ homeRef }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully! We will get back to you soon.");
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  const formatPhoneNumber = (e) => {
    const input = e.target.value.replace(/\D/g, "").substring(0, 10);
    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      e.target.value = `${areaCode}-${middle}-${last}`;
    } else if (input.length > 3) {
      e.target.value = `${areaCode}-${middle}`;
    } else if (input.length > 0) {
      e.target.value = `${areaCode}`;
    }
  };

  return (
    <div
      className="mt-20 tracking-wide min-h-[300px] bg-cover  px-2 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Separate div for the border above remove max-w-4xl mx-auto for the line to extend*/}
      <div className="border-t-1 border-red-600 max-w-4xl mx-auto "></div>
      <div
        className="tracking-wide border-blue-600"
        onContextMenu={(e) => e.preventDefault()} // Disable right-click
      >
        {/* Section title */}
        <h2 className="pt-10 pb-10 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
          <span className="text-center text-transparent bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text">
            ABOUT US
          </span>
        </h2>

        {/* About Us content and image side by side */}
        <div className="flex flex-wrap justify-center ">
          {/* Container for about us image */}
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 py-2 sm:w-1/2 lg:w-1/1">
              {/* Image container */}
              <div>
                <img
                  className="w-full object-contain h-56"
                  src={aboutUsImage}
                  alt="Meter Electric Van"
                />
              </div>
            </div>
          </div>

          {/* About us description */}
          <div className="max-w-lg text-lg text-zinc-950 text-left  sm:px-0 px-4">
            <p className="mb-4">
              As a local, family-owned business and with over 30 years of
              experience in the electrical industry, we are committed to
              delivering high-quality workmanship and reliable service on every
              project.
            </p>
            <p className="mb-4">
              What sets us apart is the personal care we bring to every job — we
              treat your home or business like it’s our own, and we believe in
              doing the job right the first time. We take pride in providing
              solutions that are safe, efficient, and built to last.
            </p>
          </div>
        </div>
      </div>

      <h2 className="flex flex-col items-center gap-2 pt-12 text-5xl tracking-wide text-center bg-gradient-to-b from-white-50 to-transparent">
        {/* <div>
          CONTACT{" "}
          <span className="text-transparent bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text">
            US
          </span>
        </div> */}
        <h2 className="text-4xl tracking-widest text-center sm:text-5xl lg:text-4xl  text-transparent bg-linear-to-r from-zinc-900 to-zinc-950 bg-clip-text">
          CONTACT US
        </h2>
        <h6 className="flex gap-2 text-sm text-blue-600">
          Email - meterelectrical@gmail.com
        </h6>

        <a
          href="tel:425-588-7578"
          className="flex items-center justify-center gap-2 text-2xl font-semibold text-blue-600 pb-2 hover:text-blue-500"
        >
          <PhoneCall />
          <p>425-561-9562 </p>
        </a>
      </h2>

      <div className="max-w-lg px-4 py-8 mx-auto bg-white border border-gray-300 rounded-lg shadow-lg isolate sm:py-8 lg:px-6 ">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="from_name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name here..."
                pattern="[A-Za-z\s]+"
                maxLength="30"
                className="block w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-md outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
                id="phone"
                name="contact_number"
                type="tel"
                required
                autoComplete="tel"
                placeholder="Phone number here..."
                maxLength="12"
                className="block w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-md outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
                onInput={formatPhoneNumber}
              />
            </div>
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                maxLength={50}
                id="email"
                name="user_email"
                type="email"
                required
                autoComplete="email"
                placeholder="Your email here..."
                className="block w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-md outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder="Your message here..."
                maxLength="500"
                className="resize-none block w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-md outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="group">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-2xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-400 "
            >
              <span className="block group-active:[transform:translate3d(0,1px,0)]">
                {isSubmitting ? "Sending..." : "Submit"}
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Back Top Button */}
      <div className="flex items-center justify-center mt-8 pb-4">
        <button
          onClick={() =>
            homeRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex items-center max-w-[180px] px-4 py-2 font-medium border-blue-600 rounded-md shadow-xs border-1 bg-linear-to-r from-blue-400 to-blue-800 text-amber-50 hover:to-blue-600 text-sm cursor-pointer"
        >
          <span className="flex items-center gap-1 group-active:[transform:translate3d(0,1px,0)]">
            <MoveUp size={16} />
            Back to Top
          </span>
        </button>
      </div>
    </div>
  );
};

export default Contacts;
