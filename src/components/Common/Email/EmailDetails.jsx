import { Stack, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaArrowsTurnRight, FaArrowsTurnToDots } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getMailById } from "./../../../services/Email/Email.service";

const EmailDetails = () => {
  const { id } = useParams();
  const [emailDetail, setEmailDetail] = useState();
  const [isStar, setIsStar] = useState(false);

  const handleStar = async () => {
    setIsStar(!isStar);
  };

  const getMail = async (id) => {
    try {
      const response = await getMailById(id);
      console.log(response);
      setEmailDetail(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMail(id);
  }, []);
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Email</div>
        </Stack>
      </div>

      <div className="page-body">
        <div className="email-details">
          <div className="header">
            <div className="sender">{emailDetail ? emailDetail.from : ""}</div>
            <div className="operation">
              <span className="time">
                {emailDetail ? emailDetail.createdAt : ""}
              </span>
              <span className="star" onClick={handleStar}>
                {!isStar ? <FaRegStar /> : <FaStar />}
              </span>
              <span className="delete">
                <FiTrash2 />
              </span>
            </div>
          </div>
          <div className="content">
            <label>{emailDetail ? emailDetail.subject : ""}</label>
            <br />
            {emailDetail ? emailDetail.html : ""}
          </div>
          <div className="buttons">
            <button className="common-button">
              <FaArrowsTurnToDots />
              &nbsp; Reply
            </button>
            <button className="common-button">
              <FaArrowsTurnRight /> &nbsp; Forward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetails;
