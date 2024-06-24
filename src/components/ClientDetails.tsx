import ahmad from "../assets/ahmad.jpeg";

const ClientDetails = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex gap-5 px-5 py-24 md:items-center md:justify-center md:flex-row-reverse flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover h-[600px]  object-center rounded"
            alt="hero"
            src={ahmad}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">
            Ahmad{" "}
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a passionate entrepreneur with a vision to transform the
            landscape of global education. With a deep commitment to enhancing
            opportunities for students worldwide, I am embarking on a mission to
            create an innovative online platform dedicated to helping aspiring
            scholars find the best universities and colleges for studying
            abroad. My goal is to build a comprehensive, user-friendly website
            where students can effortlessly search and discover the ideal
            institutions that match their academic and personal aspirations,
            empowering them to make informed decisions about their educational
            journeys. Recognizing the challenges and complexities involved in
            selecting a study abroad destination, I am determined to provide a
            solution that addresses these pain points. My platform will serve as
            a one-stop hub, offering an extensive database of universities,
            detailed profiles, advanced search filters, and authentic student
            reviews. By leveraging cutting-edge technology and intuitive design,
            I aim to create an engaging and efficient user experience that
            simplifies the process of finding the perfect study abroad program.
            My dedication to quality and accessibility ensures that students
            from all backgrounds can access valuable information and resources
            to achieve their educational dreams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientDetails;
