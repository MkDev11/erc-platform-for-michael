import "./BottomLineConcepts.scss";

const BottomLineConcepts = () => {
  return (
    <div className="bottom-line-concepts">
      <div className="mx-auto w-[80%] max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
          <div className="col-span-1">
            <div className="w-[50%] relative mx-auto mb-6 md:mb-0">
              <img
                src="./assets/images/mini_logo.png"
                className="object-contain w-full"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="text-[30px] text-[#147144] pb-6">
              About Bottom Line Concepts
            </h3>
            <p className="font-medium text-[#555555] pb-4">
              We are a no-risk, contingency-based cost savings company. We
              negotiate on behalf of our clients to get the best prices possible
              from their existing vendors. We audit old invoices for errors
              getting our clients refunds and credits. We increase the
              profitability and overall valuation of our client’s organizations.
              We believe strongly in all species being created equal. Therefore,
              animal rights, sustainability, and protecting the environment for
              future generations are paramount to us. Through our “Line Up For
              Charity” program we give our clients the opportunity to donate
              part of the cost savings we achieve to causes our clients are
              passionate about. We provide a work environment where you can make
              difference.
            </p>
            <p className="font-medium text-[#555555] pb-4">
              Interested in finding out more, or have any questions for us?
            </p>
            <p className="font-bold text-[#555555]">
              <a href="#contact">Contact Us Today</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomLineConcepts;
