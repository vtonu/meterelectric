import { MoveUp } from 'lucide-react';
import emailjs from 'emailjs-com';
import { PhoneCall } from 'lucide-react';
import { useRef, useState } from 'react';

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
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully! We will get back to you soon.');
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
          setIsSubmitting(false);
        },
      );
  };

  const formatPhoneNumber = (e) => {
    const input = e.target.value.replace(/\D/g, '').substring(0, 10);
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
    <div className="mt-20 tracking-wide min-h-[300px] border-t border-blue-700">
      <h2 className="flex flex-col items-center gap-2 pt-12 mt-2 mb-2 text-5xl tracking-wide text-center">
        <div>
          CONTACT{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
            US
          </span>
        </div>
        <h6 className="flex gap-2 text-sm">Email - meterelectrical@gmail.com</h6>

        <a
          href="tel:425-588-7578"
          className="flex items-center justify-center gap-2 text-xl font-semibold text-blue-600">
          <PhoneCall />
          <p>425-561-9562 </p>
        </a>
      </h2>

      <div className="max-w-lg px-6 py-8 mx-auto bg-white border border-gray-300 rounded-lg shadow-lg isolate sm:py-8 lg:px-6">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
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
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
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
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
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
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
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
                className="block w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-md outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-300">
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>

      {/* Back Top Button */}
      <div className=" button-container">
        <button
          onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="flex px-2 py-2 mx-2 rounded-sm shadow-sm text-neutral-800 shadow-blue-500 bg-gradient-to-br from-blue-600 to-blue-500 group-hover:from-sky-300 group-hover:to-blue-200 hover:text-blue-100 dark:text-white focus:outline-none focus:ring-blue-300 dark:focus:ring-sky-800">
          <MoveUp />
          Back Top
        </button>
      </div>
    </div>
  );
};

export default Contacts;
