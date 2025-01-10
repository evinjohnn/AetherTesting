import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const AdminCaseSectionDetails = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location; // Get blog data from the route state
  const blogData = state.data;
  console.log("blogData", blogData);

  const [scrollProgress, setScrollProgress] = useState(0);

  //function to format date in the way dd.mm.yyy
  function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = d.getFullYear();

    return `${day}.${month}.${year}`;
  }
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Section>
      <ScrollProgressBar progress={scrollProgress} />
      <div className="">
        <HiOutlineArrowLeft
          onClick={handleBack}
          style={{ marginBottom: "30px", fontSize: "25px", cursor: "pointer" }}
        />
        <SubContainer>
          <Left>
            <DetailCard>
              <ImageContainer>
                <Image src={`${blogData?.image}`} alt="Blog Detail" />

                {/* <Progress>
                  <Number>100</Number>
                </Progress> */}
              </ImageContainer>
              <Detail>
                <Content>{blogData?.description}</Content>
              </Detail>
            </DetailCard>
          </Left>
        </SubContainer>
      </div>
    </Section>
  );
};

export default AdminCaseSectionDetails;

const ScrollProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ progress }) => progress}%;
  height: 5px;
  background-color: ${colors.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`;

const Section = styled.section``;

const SubContainer = styled.div``;

const Left = styled.div``;

const DetailCard = styled.div`
  background-color: ${colors.white};

  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 2rem; /* Add margin for spacing on smaller screens */
  }
`;

const Detail = styled.div`
  padding: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 450px;
  @media (max-width: 768px) {
    height: 300px; /* Adjust height for smaller screens */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Head = styled.h2`
  color: ${colors.black};
  font-size: 30px;
`;

const Content = styled.p`
  font-size: 1rem;
  color: ${colors.black};
  margin-top: 1rem;
`;

const End = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 20px;
  span {
    color: ${colors.black};
    font-weight: 300;
    font-size: 15px;
  }
`;

const DateDisplay = styled.p`
  text-transform: uppercase;
  font-weight: 300;
  color: ${colors.black};
  &.end {
    border-left: 1px solid ${colors.grey_border};
    padding-left: 15px;
  }
`;
