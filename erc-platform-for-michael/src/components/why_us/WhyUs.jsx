import "./WhyUs.scss";
const services = [
  { text: "Thorough evaluation regarding your eligibility" },
  { text: "Comprehensive analysis of your claim" },
  { text: "Guidance on the claiming process and documentation" },
  {
    text: "Specific program expertise that a regular CPA or payroll processor might not be well-versed in",
  },
  {
    text: "Fast and smooth end-to-end process, from eligibility to claiming and receiving refunds",
  },
];

const questions = [
  { text: "How does the PPP loan factor into the ERC?" },
  {
    text: "What are the differences between the 2020 and 2021 programs and how does it apply to your business?",
  },
  {
    text: "What are aggregation rules for larger, multi-state employers, and how do I interpret multiple states’ executive orders?",
  },
  {
    text: "How do part-time, Union, and tipped employees affect the amount of my refunds?",
  },
];

const WhyUs = () => {
  return (
    <div id="whyUs" className="pb-14 why-us">
      <div className="mx-auto text-center w-[80%] max-w-6xl">
        <h2 className="text-[38px] text-[#478A6B] font-medium">
          Why <strong>Us?</strong>
        </h2>
        <p className="text-[18px] text-[#555555] font-medium tracking-wide pb-4">
          The ERC underwent several changes and has many technical details,
          including how to determine qualified wages, which employees are
          eligible, and more. Your business’ specific case might require more
          intensive review and analysis. The program is complex and might leave
          you with many unanswered questions.
        </p>
        <p className="text-[18px] text-[#555555] font-medium tracking-wide pb-4">
          We can help make sense of it all. Our dedicated experts will guide you
          and outline the steps you need to take so you can maximize the claim
          for your business.
        </p>
        <div className="mb-0 text-center transition-transform duration-300 relative">
          <a
            className="px-10 py-3 inline-block transition-all ease-out duration-300 text-xl font-medium bg-center bg-cover border-none rounded-sm decoration-0 bg-[#7fc241] text-white hover:bg-[#2f3436]"
            href="#get-started"
          >
            <i className="far fa-check-square mr-2" />
            GET QUALIFIED
          </a>
        </div>
      </div>
      <div className="mx-auto text-center w-[80%] max-w-6xl mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-left text-[#555]">
            <h3 className="text-lg mb-6 font-bold">Our services inclueds:</h3>
            <div className="text-left flex flex-col gap-3">
              {services.map((item, index) => {
                return (
                  <div
                    key={`serivce_${index}`}
                    className="flex gap-5 items-center"
                  >
                    <span className="rounded-full bg-[#1A3874]">
                      <i className="w-6 h-6 flex justify-center items-center fas fa-check text-white"></i>
                    </span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <img
              src="./assets/images/service1.jpg"
              className="object-contain w-full"
              alt="service1"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full">
            <img
              src="./assets/images/service2.jpg"
              className="object-contain w-full"
              alt="service1"
            />
          </div>
          <div className="text-left text-[#555]">
            <h3 className="text-lg mb-6 font-bold">
              Dedicated specialists that will interpret highly complex program
              rules and will be available to answer your questions, including:
            </h3>
            <div className="text-left flex flex-col gap-3">
              {questions.map((item, index) => {
                return (
                  <div
                    key={`question_${index}`}
                    className="flex gap-5 items-center"
                  >
                    <span className="rounded-full bg-[#1A3874]">
                      <i className="w-6 h-6 flex justify-center items-center fas fa-check text-white"></i>
                    </span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
