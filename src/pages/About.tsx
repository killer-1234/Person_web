const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        About Me
      </h1>
      <div className="prose dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Hello! I'm a passionate developer with experience in web development and software engineering.
          I love creating beautiful and functional applications that solve real-world problems.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
          Skills
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          <li>Frontend Development (React, TypeScript, Tailwind CSS)</li>
          <li>Backend Development (Node.js, Python)</li>
          <li>Database Management (SQL, MongoDB)</li>
          <li>Version Control (Git)</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
          Education
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Bachelor's Degree in Computer Science
        </p>
      </div>
    </div>
  )
}

export default About 