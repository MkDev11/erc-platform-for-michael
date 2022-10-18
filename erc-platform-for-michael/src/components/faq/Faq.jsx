import Accordion from "components/accordion";
import "./Faq.scss";

const faqs = [
  {
    title: "What period does the program cover?",
    content: `<p className='font-medium'>The program began on March 13th, 2020 and ends on September 30, 2021, for eligible employers.</p>
    <p><br/>You can apply for refunds for 2020 and 2021 after December 31st of this year, into 2022 and 2023. And potentially beyond then too.</p>
    <p><br/>We have clients who received refunds only, and others that, in addition to refunds, also qualified to continue receiving ERC in every payroll they process through December 31, 2021, at about 30% of their payroll cost.</p>
    <p><br/>We have clients who have received refunds from $100,000 to $6 million.</p>`,
  },
  {
    title: "Do we still qualify if we already took the PPP?",
    content: `Yes. Under the Consolidated Appropriations Act, businesses can now qualify for the ERC even if they already received a PPP loan. Note, though, that the ERC will only apply to wages not used for the PPP.`,
  },
  {
    title:
      "Do we still qualify if we did not incur a 20% decline in gross receipts?",
    content: `<p>Your business qualifies for the ERC, if it falls under one of the following:</p>
    <ul><li>A government authority required partial or full shutdown of your business during 2020 or 2021. This includes your operations being limited by commerce, inability to travel or restrictions of group meetings.</li><li>Gross receipt reduction criteria is different for 2020 and 2021, but is measured against the current quarter as compared to 2019 pre-COVID amounts.</li></ul>`,
  },
  {
    title: "Do we still qualify if we remained open during the pandemic?",
    content: `<p>Yes. To qualify, your business must meet either one of the following criteria:</p><br/>
    <ul>
        <li>Experienced a decline in gross receipts by 20%, or</li>
        <li>Had to change business operations due to government orders</li>
    </ul>
    <p><br/>Many items are considered as changes in business operations, including shifts in job roles and the purchase of extra protective equipment. The ERC, in this case, also applies only for Q3 and Q4 of 2021. Businesses can qualify, regardless of the number of full-time employees.</p>`,
  },
];

const Faq = () => {
  return (
    <div className="faq-section">
      <div className="mx-auto w-[80%] max-w-6xl">
        <h2 className="text-2xl font-bold text-[#147144] mb-5">
          Frequently Asked Questions (FAQs)
        </h2>
        <Accordion data={faqs} />
      </div>
    </div>
  );
};

export default Faq;
