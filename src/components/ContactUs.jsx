import { MoveUp, Copy } from 'lucide-react';
import { useCallback } from 'react';

const Contacts = ({ homeRef }) => {
  const copyToClipboard = useCallback((text) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  }, []);

  return (
    <div className="mt-20 tracking-wide min-h-[300px] border-t border-blue-700">
      <h2 className="flex flex-col items-center pt-10 mt-2 text-6xl tracking-wide text-center">
        <div>
          CONTACT{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
            US
          </span>
        </div>
        <br />
        <br />
        <h6 className="flex gap-2 text-lg">
          Email - meterelectrical@gmail.com
          <button
            onClick={() => copyToClipboard('meterelectrical@gmail.com')}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-100 group-hover:from-sky-500 group-hover:to-blue-200 hover:text-white dark:text-white focus:outline-none focus:ring-blue-300 dark:focus:ring-sky-800">
            <span className="relative transition-all duration-75 ease-in bg-white rounded-md group-hover:bg-opacity-0">
              <Copy className="flex w-6 h-6 px-1 py-1 shadow-sm rounded-xs text-neutral-900 shadow-blue-300" />
            </span>
          </button>
        </h6>
        <h6 className="flex gap-2 text-lg">
          Website - www.meterelectrical.com
          <button
            onClick={() => copyToClipboard('www.meterelectrical.com')}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-100 group-hover:from-sky-500 group-hover:to-blue-200 hover:text-white dark:text-white focus:outline-none focus:ring-blue-300 dark:focus:ring-sky-800">
            <span className="relative transition-all duration-75 ease-in bg-white rounded-md group-hover:bg-opacity-0">
              <Copy className="flex w-6 h-6 px-1 py-1 shadow-sm rounded-xs text-neutral-900 shadow-blue-300" />
            </span>
          </button>
        </h6>
        <h6 className="flex gap-2 text-lg">
          Phone - (425)-588-7578
          <button
            onClick={() => copyToClipboard('4255887578')}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-100 group-hover:from-sky-500 group-hover:to-blue-200 hover:text-white dark:text-white focus:outline-none focus:ring-blue-300 dark:focus:ring-sky-800">
            <span className="relative transition-all duration-75 ease-in bg-white rounded-md group-hover:bg-opacity-0">
              <Copy className="flex w-6 h-6 px-1 py-1 shadow-sm rounded-xs text-neutral-900 shadow-blue-300" />
            </span>
          </button>
        </h6>
      </h2>
      <div className="button-container">
        <button
          onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="flex px-2 py-2 mx-2 rounded-sm shadow-sm text-neutral-900 shadow-blue-300 bg-gradient-to-br from-blue-600 to-blue-100 group-hover:from-sky-500 group-hover:to-blue-200 hover:text-black dark:text-white focus:outline-none focus:ring-blue-300 dark:focus:ring-sky-800">
          <MoveUp />
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default Contacts;
