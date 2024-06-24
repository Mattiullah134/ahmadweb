import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex  py-14 px-2 sm:px-8 lg:px-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-6xl mb-4 font-medium text-gray-600">
            Discover Your Perfect
            <br className="hidden lg:inline-block" />
            Study Abroad Destination
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to your ultimate guide to finding the best universities and
            colleges for studying abroad. Whether you're dreaming of attending a
            prestigious institution, exploring new cultures, or enhancing your
            academic and career prospects, we've got you covered. Our
            comprehensive, user-friendly platform empowers you to search,
            compare, and discover the ideal study abroad programs that align
            with your aspirations and goals.
          </p>
          <div className="flex justify-center">
            <Link
              to={"/services"}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Explore Now
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://img.freepik.com/free-vector/corporate-website-abstract-concept-illustration_335657-1831.jpg"
          />
        </div>
      </div>
    </section>
  );
};
