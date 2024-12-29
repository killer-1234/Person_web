import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Contact Me
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Email
              </h2>
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                your.email@example.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                +1 (123) 456-7890
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Location
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact 