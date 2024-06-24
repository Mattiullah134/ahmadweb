const ServicesData = [
  {
    id: "services-data1",
    img: "https://neilpatel.com/wp-content/uploads/2021/01/alternative-search-engines-.jpg",
    title: "Find Univerisity",
    description:
      "Find the best univeristy from the various country in the world",
  },
  {
    id: "services-data2",
    img: "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?t=st=1719259219~exp=1719262819~hmac=1358ad0811ead0089e019fb7632a4c27fc3a41f5b87b3c2512d67c1ed4ee76c0&w=900",
    title: "Blogs",
    description:
      "Step by Step guide how to search and apply in the universities",
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
          <div className="flex justify-center gap-20 flex-wrap -m-4">
            {ServicesData.map((data) => {
              return (
                <div className="p-4 bg-white shadow-md lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={data.img}
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
