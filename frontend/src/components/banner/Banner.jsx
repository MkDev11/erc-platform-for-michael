import "./Banner.scss";

const Banner = () => {
  // return (
  //   <div className="banner">
  //     <img
  //       src="./assets/images/bg.jpg"
  //       className="object-contain w-full"
  //       alt="Banner"
  //     />
  //   </div>
  // );

  return (
    <div className="relative bg-center bg-cover py-24 md:py-36">
      <span className="absolute overflow-hidden top-0 left-0 right-0 bottom-0">
        <span
          className="bg-no-repeat bg-top bg-cover absolute bottom-0 left-0 w-full block h-[864px]"
          style={{
            backgroundImage:
              'url("https://erc.bottomlinesavings.com/wp-content/uploads/2021/11/bg-2.jpeg")',
            transform: "translate(0px, 217.036px)",
          }}
        ></span>
      </span>
      <div className="w-[80%] max-w-6xl m-auto relative bg-cover bg-center bg-no-repeat z-30 lg:px-0 lg:py-[2%]">
        <div className="w-full">
          <div className="text-center mb-[2.75%] break-words relative bg-cover bg-center bg-no-repeat">
            <div className="relative pb-0 text-white">
              <h2 className="font-bold text-[45px]">
                The Employee Retention Credit
              </h2>
              <h3 className="text-[22px]">
                We Specialize in Maximizing ERC for Small Businesses
              </h3>
              <h3 className="text-[22px]">
                <strong>Receive up to $26,000 per Employee</strong>
              </h3>
            </div>
          </div>
          <div className="mb-0 text-center transition-transform duration-300 relative">
            <a
              className="px-10 py-3 inline-block transition-all ease-out duration-300 text-xl font-medium bg-center bg-cover border-none rounded-sm decoration-0 bg-[#7fc241] text-white hover:bg-[#2f3436]"
              href="#submissionForm"
            >
                <i className="far fa-check-square mr-2" />
              GET QUALIFIED
            </a>
          </div>
        </div>
      </div>
      <div className="banner-divider"></div>
    </div>
  );
};

export default Banner;
