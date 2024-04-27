import { Stack } from "@mui/material";
import React from "react";

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      plan: "Basic",
      price: "299/month",
      features: [
        "Up to 10 active job postings",
        "Basic candidate tracking",
        "Email support",
      ],
    },
    {
      id: 2,
      plan: "Standard",
      price: "599/month",
      features: [
        "Up to 25 active job postings",
        "Advanced candidate tracking",
        "Email and live chat support",
        "Customizable branding",
      ],
    },
    {
      id: 3,
      plan: "Premium",
      price: "999/month",
      features: [
        "Unlimited active job postings",
        "Advanced candidate tracking with analytics",
        "Priority email and live chat support",
        "Customizable branding and integration options",
        "Dedicated account manager",
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
    <div className="singlePlan">
      <h3>{plan.plan}</h3>
      <p className="price">{plan.price}</p>
      <button className="common-button">Choose Plan</button>
      <ul>
        {plan.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};
