import axios from "axios";

import { useEffect, useState } from "react";
interface UniversityData {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  web_pages: string[];
  state_province: string;
}
const Services = () => {
  const [countryName, setCountryName] = useState("pakistan");
  const [universitData, setUniversityData] = useState<UniversityData[] | null>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setLoading(true);
      let { data } = await axios.get(
        `http://universities.hipolabs.com/search?country=${countryName}`
      );
      setLoading(false);
      console.log("type", typeof data[0]);

      setUniversityData(data);
      console.log("data", data);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleInputChange = (country: string) => {
    setCountryName(country);
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div className="py-24 min-h-screen px-2 sm:px-8 lg:px-20">
      <form onSubmit={handleSearch} className="relative pb-10">
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search"
              required
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>

      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-10 mx-auto">
          <div className="flex flex-wrap justify-between md:justify-center -m-4 w-full">
            {loading
              ? "loading..."
              : universitData && universitData?.length > 0
              ? universitData?.map((ser) => {
                  return (
                    <div className="p-4 lg:w-1/3">
                      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {ser?.country}
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                          {ser.name}
                        </h1>
                        <p className="leading-relaxed mb-3">
                          {ser.state_province}
                        </p>
                        <a
                          href={ser.web_pages[0]}
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  );
                })
              : "no record found"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
