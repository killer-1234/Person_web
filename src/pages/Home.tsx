import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Welcome to My Personal Website
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        I'm a passionate developer building amazing things
      </p>
      <div className="flex space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <FaTwitter className="w-8 h-8" />
        </a>
      </div>
    </div>
  )
}

export default Home 