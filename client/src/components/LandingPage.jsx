//import { useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="min-h-full min-w-fit bg-gradient-to-b from-white to-blue-600 text-gray-800 relative">
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-600">
              Ctrl+Alt+Employed
            </h1>
          </Link>
          <div>
            <a
              href="#features"
              className="mr-6 font-medium hover:text-blue-600 transition"
            >
              Features
            </a>
            <Link
              to="/login"
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center py-20 gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              Track Your Job Applications <br />
              <span className="text-blue-600">Easily & Effectively</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Stay organized and never miss a follow-up. Manage your job search
              progress with intuitive dashboards, reminders, and detailed notes.
            </p>
            <Link
              to="/register"
              className="btn inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Get Started — It's Free
            </Link>
          </div>

          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1551836022-c50e29f69e56?auto=format&fit=crop&w=800&q=80"
              alt="Job Application Tracking Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="bg-white py-20 px-6 max-w-7xl mx-auto text-center rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-12">
            Features that Make Job Tracking Easy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
              <svg
                className="mx-auto mb-4 w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7 12a4 4 0 118 0 4 4 0 01-8 0z"
                />
              </svg>
              <h4 className="font-semibold mb-2">Organized Dashboard</h4>
              <p className="text-gray-600">
                View all your applications in one place with status updates and
                key dates.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
              <svg
                className="mx-auto mb-4 w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <h4 className="font-semibold mb-2">Reminders & Deadlines</h4>
              <p className="text-gray-600">
                Get notified about upcoming interviews and follow-up deadlines.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
              <svg
                className="mx-auto mb-4 w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14v7"
                />
              </svg>
              <h4 className="font-semibold mb-2">Notes & Documents</h4>
              <p className="text-gray-600">
                Attach resumes, cover letters, and jot down interview notes for
                each application.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="signup"
          className="bg-blue-600 py-16 px-6 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to get organized?</h3>
          <p className="mb-8 max-w-xl mx-auto">
            Sign up today and take control of your job search with
            Ctrl+Alt+Employed.
          </p>
          <Link
            to="/register"
            className="btn inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Create Your Free Account
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-white py-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Ctrl+Alt+Employed. All rights
          reserved.
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
