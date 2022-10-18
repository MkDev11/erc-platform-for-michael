import "./GetStarted.scss";

const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="mx-auto w-[80%] max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="block text-white">
            <h3 className="text-4xl font-bold pb-3">
              Ready To Get Started? It’s Simple.
            </h3>
            <p className="font-medium pb-4">
              1. We determine whether your business qualifies for the ERC.
            </p>
            <p className="font-medium pb-4">
              2. We analyze your claim and compute the maximum amount you can
              receive.
            </p>
            <p className="font-medium pb-4">
              3. Our team guides you through the claiming process, from
              beginning to end, including proper documentation.
            </p>
          </div>
          <div className="p-[30px] bg-[#7fc241] text-center text-white">
            <h3 className="text-4xl font-bold pb-3 uppercase">Do you qualify?</h3>
            <p className="font-medium pb-4">Answer a few simple questions.</p>
            <div className="mb-0 text-center transition-transform duration-300 relative">
              <a
                className="px-10 py-3 inline-block transition-all ease-out duration-300 text-xl font-medium bg-center bg-cover border-none rounded-sm decoration-0 bg-white text-[#555] hover:bg-[#2f3436] hover:text-white"
                href="#get-started"
              >
                <i className="far fa-check-square mr-2" />
                SCHEDULE A CALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
