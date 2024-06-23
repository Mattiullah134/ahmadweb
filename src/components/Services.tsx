import React from "react";
const ServicesData = [
  {
    id: "services-data1",
    img: "",
    title: "IT Consulting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, fuga?",
  },
  {
    id: "services-data2",
    img: "",
    title: "E-Consulting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, fuga?",
  },
  {
    id: "services-data3",
    img: "",
    title: "Product Consulting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, fuga?",
  },
];

const Services = () => {
  return (
    <div className="bg-[#f4f8fb]">
      <section className="text-gray-600 body-font">
        <div className="container px-2 sm:px-8 lg:px-20 py-12 mx-auto">
          <div className="flex flex-col  w-full mb-20">
            <h1 className="text-2xl capitalize font-medium title-font mb-4 text-gray-600">
              OUR TOP SERVICES
            </h1>
          </div>
          <div className="flex justify-between flex-wrap -m-4">
            {ServicesData.map((data) => {
              return (
                <div className="p-4 bg-white shadow-md lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="https://dummyimage.com/200x200"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {data.title}
                      </h2>
                      <p className="mb-4">{data.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
