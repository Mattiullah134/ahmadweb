import { useState } from "react";
import data from "../utils/data";

let countryData = [
  { id: "countrydata-1", name: "Pakistan", value: "pakistan" },
  { id: "countrydata-2", name: "France", value: "france" },
  { id: "countrydata-3", name: "Italy", value: "italy" },
  { id: "countrydata-4", name: "UnitedKindom", value: "uk" },
  { id: "countrydata-5", name: "Germany", value: "germany" },
];
const Services = () => {
  const [countryName, setCountryName] = useState("pakistan");
  // const [_, setUniversityData] = useState<UniversityData[] | null>([]);

  const [dropdown, setDropDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  const handleSearch = (value: string) => {
    setLoading(true);
    toggleDropDown();
    setCountryName(value);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };
  return (
    <div className="py-24 min-h-screen px-2 sm:px-8 lg:px-20">
      <form className="pb-10 relative">
        <div className="flex">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 sm:px-4  text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            type="button"
            onClick={toggleDropDown}
          >
            All categories{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {dropdown && (
            <div
              id="dropdown"
              className="z-10 absolute top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                {countryData.map((data) => {
                  return (
                    <li key={data.id} className="cursor-pointer">
                      <p
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => handleSearch(data.value)}
                      >
                        {data.name}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <div className="relative  w-full ">
            <input
              type="search"
              id="search-dropdown"
              value={countryName}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search"
              required
              readOnly
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
              : data[countryName].length > 0
              ? data[countryName]?.map((ser) => {
                  return (
                    <div className="p-4 lg:w-1/3">
                      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {ser?.country}
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                          {ser.name}
                        </h1>

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
