import { Stack } from "@mui/material";
import React from "react";

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      plan: "Basic",
      base: "Everything to start",
      price: "299",
      per: "month",
      features: [
        " 10 active job postings",
        "Basic candidate tracking",
        "Email support",
        "Kanban Board",
        "No Customization",
      ],
    },
    {
      id: 2,
      plan: "Standard",
      base: "Everything to launch",
      price: "599",
      per: "month",
      color: "purple",
      features: [
        "50 active job postings",
        "Adv. candidate tracking",
        "Email and live chat support",
        "Kanban Board",
        "Customizable branding",
      ],
    },
    {
      id: 3,
      plan: "Premium",
      base: "Everything to go public",
      price: "999",
      per: "month",
      features: [
        "Unlimited active job postings",
        "Adv. candidate tracking & analytics",
        "Priority email and live chat support",
        "Kanban Board",
        "Personal Support",
      ],
    },
  ];
  return (
    <div className="pricing-container">
      <div className="body-content">
        <span className="heading-text">Flexible Pricing Plans</span>
        <span className="subheading-text">
          Choose the Perfect Plan to Suit Your Hiring Needs
        </span>
        <Stack direction="row" className="pricing-cards-container">
          {pricingData.map((plan, index) => (
            <SinglePlan key={index} plan={plan} />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Pricing;

const SinglePlan = ({ plan }) => {
  return (
    <div className={`singlePlan ${plan.color}`}>
      <h5 style={{ fontWeight: "800" }}>{plan.plan}</h5>
      <span className="just-text">{plan.base}</span>
      <p className="price">
        <span>Rs{plan.price}</span>/ {plan.per}
      </p>
      <ul>
        {plan.features.map((feature, idx) => (
          <li className="just-text" key={idx}>
            {feature}
          </li>
        ))}
      </ul>
      <button className="black-button">Choose Plan</button>
    </div>
  );
};
