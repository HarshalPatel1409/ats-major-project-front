import { Stack } from "@mui/material";
import React from "react";

const Company = () => {
  const brandsData = [
    {
      id: 1,
      name: "UIdeck",
      image: "uideck.svg",
      imageLight: "uideck-light.svg",
    },
    {
      id: 2,
      name: "Tailgrids",
      image: "tailgrids.svg",
      imageLight: "tailgrids-light.svg",
    },
    {
      id: 3,
      name: "Lineicons",
      image: "lineicons.svg",
      imageLight: "lineicons-light.svg",
    },
    {
      id: 4,
      name: "Ayro UI",
      image: "ayroui.svg",
      imageLight: "ayroui-light.svg",
    },
    {
      id: 5,
      name: "PlainAdmin",
      image: "plainadmin.svg",
      imageLight: "plainadmin-light.svg",
    },
  ];

  return (
    <div className="company-container">
      <Stack direction="row" justifyContent="center" alignItems="center">
        {brandsData.map((brand) => (
          <SingleBrand key={brand.id} brand={brand} />
        ))}
      </Stack>
    </div>
  );
};

export default Company;

const SingleBrand = ({ brand }) => {
  const { image, name } = brand;
  return (
    <div className="singleBrand">
      <img src={"/images/brands/" + image} alt={name} />
    </div>
  );
};
