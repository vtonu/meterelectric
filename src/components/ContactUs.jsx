import { MoveUp } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contacts = ({ homeRef }) => {
  const formRef = useRef();

  // Utility to check submission limit
  const canSendMessage = () => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('submissionDate');
    let submissionCount = parseInt(localStorage.getItem('submissionCount') || '0', 10);

    // Reset limit if day has changed
    if (savedDate !== today) {
      localStorage.setItem('submissionDate', today);
      localStorage.setItem('submissionCount', '1');
      return true;
    }

    // Otherwise, check if limit reached
    if (submissionCount >= 3) {
      return false;
    } else {
      localStorage.setItem('submissionCount', (submissionCount + 1).toString());
      return true;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // If limit reached, deny
    if (!canSendMessage()) {
      alert('You have reached the maximum number of submissions for today.');
      return;
    }

    // Use environment variables instead of inline credentials
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        },
      );
  };

  return (
    <div className="mt-20 tracking-wide min-h-[300px] border-t border-blue-700">
      <h2 className="flex flex-col items-center mt-2 text-5xl tracking-wide text-center pt-36">
        <div>
          CONTACT{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
            US
          </span>
        </div>
        <h6 className="flex gap-2 text-sm">Email - meterelectrical@gmail.com</h6>
        <h6 className="flex gap-2 text-sm">Phone - (425)-588-7578</h6>
      </h2>

      <div className="max-w-lg px-6 py-12 mx-auto bg-white border border-gray-300 rounded-lg shadow-lg isolate sm:py-16 lg:px-8">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name..."
                className="block w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-md outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
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
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Your email address..."
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
                className="block w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-md outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Submit
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
