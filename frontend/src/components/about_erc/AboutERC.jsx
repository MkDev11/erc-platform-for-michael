import "./AboutERC.scss";

const concepts = [
  { text: "Up to $26,000 per employee" },
  { text: "Available for 2020 and the first 3 quarters of 2021" },
  { text: "Qualify with decreased revenue or COVID event" },
  { text: "No limit on funding" },
  { text: "ERC is a refundable tax credit" },
];

const businessWays = [
  {
    text: "A government authority required partial or full shutdown of your business during 2020 or 2021. This includes your operations being limited by commerce, inability to travel or restrictions of group meetings.",
  },
  {
    text: "Gross receipt reduction criteria is different for 2020 and 2021, but is measured against the current quarter as compared to 2019 pre-COVID amounts.",
  },
  { text: "A business can be eligible for one quarter and not another." },
  {
    text: "Initially, under the CARES Act of 2020, businesses were not able to qualify for the ERC if they had already received a Paycheck Protection Program (PPP) loan. With new legislation in 2021, employers are now eligible for both programs. The ERC, though, cannot apply to the same wages as the ones for PPP.",
  },
];

const AboutERC = () => {
  return (
    <div id="aboutERC" className="about-erc">
      <div className="top-divider"></div>
      <div className="w-[80%]  max-w-6xl mx-auto py-7">
        <div className="relative text-white font-bold mb-6">
          <h2 className="text-4xl pb-3">About The ERC Program</h2>
          <h3 className="text-xl pb-3">
            What is the Employee Retention Credit (ERC)?
          </h3>
          <p className="text-lg pb-4">
            ERC is a stimulus program designed to help those businesses that
            were able to retain their employees during the Covid-19 pandemic.
          </p>
          <p className="text-lg">
            Established by the CARES Act, it is a refundable tax credit – a
            grant, not a loan – that you can claim for your business. The ERC is
            available to both small and mid-sized businesses. It is based on
            qualified wages and healthcare paid to employees.
          </p>
        </div>
        <div className="text-left flex flex-col gap-3">
          {concepts.map((item, index) => {
            return (
              <div key={`concept_${index}`} className="flex gap-5 items-center">
                <span className="rounded-full bg-white">
                  <i className="w-6 h-6 flex justify-center items-center fas fa-check text-[#7fc241]"></i>
                </span>
                <span className="text-lg font-medium text-white">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
        <div className="relative text-white font-bold my-6">
          <h3 className="text-xl pb-3">How much money can you get back?</h3>
          <p className="text-lg pb-4">
            You can claim up to $5,000 per employee for 2020. For 2021, the
            credit can be up to $7,000 per employee per quarter.
          </p>
          <h3 className="text-xl pb-3">
            How do you know if your business is eligible?
          </h3>
          <p className="text-lg pb-4">
            To qualify, your business must have been negatively impacted in
            either of the following ways:
          </p>
        </div>
        <div className="text-left flex flex-col gap-3">
          {businessWays.map((item, index) => {
            return (
              <div key={`way_${index}`} className="flex gap-5 items-center">
                <span className="rounded-full bg-white">
                  <i className="w-6 h-6 flex justify-center items-center fas fa-check text-[#7fc241]"></i>
                </span>
                <span className="text-lg font-medium text-white">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom-divider"></div>
    </div>
  );
};

export default AboutERC;
