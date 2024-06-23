import React from "react";

const ClientDetails = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex gap-5 px-5 py-24 md:items-center md:justify-center md:flex-row-reverse flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover h-[600px]  object-center rounded"
            alt="hero"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">
            Ahmad{" "}
          </h1>
          <p className="mb-8 leading-relaxed">
            With a decade of experience in software development, I have honed my
            proficiency in languages such as Java, Python, C++, JavaScript, and
            SQL. My deep understanding of these languages has enabled me to
            tackle a wide range of development projects, from complex backend
            systems to dynamic web applications. I am well-versed in frameworks
            and libraries including React, Angular, Django, Spring Boot, and
            Node.js. My technical toolkit also includes expertise in Docker,
            Kubernetes, AWS, Jenkins, and Git. This diverse skill set allows me
            to seamlessly integrate and manage various technologies to deliver
            robust and scalable solutions. I am a strong advocate of Test-Driven
            Development (TDD), Continuous Integration/Continuous Deployment
            (CI/CD), and DevOps principles. My ability to identify issues and
            implement effective solutions, combined with a focus on producing
            high-quality, maintainable code, has consistently contributed to the
            success of the projects I have undertaken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientDetails;
