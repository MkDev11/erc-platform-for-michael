import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="top-divider" />
      <span className="absolute overflow-hidden top-0 left-0 right-0 bottom-0">
        <span
          className="bg-no-repeat bg-top bg-cover absolute bottom-0 left-0 w-full block h-[864px]"
          style={{
            backgroundImage:
              'url("https://erc.bottomlinesavings.com/wp-content/uploads/2021/11/bg-2.jpeg")',
            transform: "translate(0px, 250.767px)",
          }}
        ></span>
      </span>
      <div className="w-[80%] max-w-6xl m-auto relative bg-cover bg-center bg-no-repeat z-30 lg:px-0 py-[16%] md:py-[12%] lg:py-[8%]">
        <div className="w-full">
          <div className="text-center mb-[2.75%] break-words relative bg-cover bg-center bg-no-repeat">
            <div className="relative pb-0 text-white max-w-3xl mx-auto">
              <h3 className="text-[22px] font-bold">
                GovernmentAid, a division of Bottom Line Concepts, assists
                clients with various forms of financial relief, particularly,
                the Employee Retention Credit Program.
              </h3>
            </div>
          </div>
          <div className="mb-0 text-center transition-transform duration-300 relative">
            <a
              className="px-10 py-3 inline-block transition-all ease-out duration-300 text-xl font-medium bg-center bg-cover border-none rounded-sm decoration-0 bg-[#7fc241] text-white hover:bg-[#2f3436] uppercase"
              href="#get-started"
            >
              <i className="far fa-envelope mr-2" />
              Conact Us
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-divider"></div>
    </div>
  );
};

export default ContactUs;
