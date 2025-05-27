import React, { useState } from "react"; // Keep this as it's the actual library import

// Main App component
const App = () => {
  const [funnyJoke, setFunnyJoke] = useState(undefined);

  async function getFunnyJoke() {
    const res = await fetch("http://localhost:3005/api/funnyJoke", {
      method: "get",
    });
    const body = await res.json();
    const newFunnyJoke = `${body.message}... ${body.joke}`;
    setFunnyJoke(newFunnyJoke);
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 shadow-lg rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            My Awesome SwizzyWeb Site
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300 text-lg font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300 text-lg font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300 text-lg font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300 text-lg font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto p-8 py-12">
        <section className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Our Site!
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            This is a sample SwizzyWeb website built with the power and
            flexibility of Tailwind CSS. Enjoy the clean design and responsive
            layout that adapts beautifully to any screen size. We've focused on
            creating a modern and user-friendly experience.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              Learn More
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Responsive Design
            </h3>
            <p className="text-gray-600">
              Our website looks great on desktops, tablets, and mobile phones,
              ensuring a seamless experience for all users.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <h3 className="2xl font-semibold text-gray-800 mb-3">Modern UI</h3>
            <p className="text-gray-600">
              Leveraging Tailwind CSS, we've crafted a clean, modern, and
              intuitive user interface.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <h3 className="2xl font-semibold text-gray-800 mb-3">
              Easy to Customize
            </h3>
            <p className="text-gray-600">
              The component-based structure makes it incredibly easy to extend
              and customize.
            </p>
          </div>
          {/* Feature Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <h3 className="2xl font-semibold text-gray-800 mb-3">
              Easy to add custom api's
            </h3>
            <p className="text-gray-600">
              Adding api's is as simple as creating new controllers, checkout
              our funny joke API by clicking the button below.
            </p>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 mt-5 mb-5"
              onClick={getFunnyJoke}
            >
              Get funny joke
            </button>
            {funnyJoke && (
              <div>
                <p id="FunnyJoke">{funnyJoke}</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-6 mt-8 rounded-t-xl shadow-inner">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} My Awesome SwizzyWeb Site. All
            rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Made with{" "}
            <span className="font-semibold text-white">@swizzyweb</span>
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
