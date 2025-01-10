import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import { clientaxiosInstance } from "../../utils/baseurl";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillShareFill } from "react-icons/bs";

const CaseStudyDetailPage = () => {
  const { id } = useParams(); // Get casestudy ID from the route parameter
  const [casestudy, setCaseStudy] = useState(null);
  const [casestudys, setCaseStudys] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const casestudyRef = useRef(null); // Create a ref for LeftDiv
  const [casestudyScrollProgress, setCaseStudyScrollProgress] = useState(0);
  const navigate = useNavigate();

  const [casestudyId, setcasestudyId] = useState(null);

  useEffect(() => {
    // Fetch casestudy data from API
    const fetchCaseStudy = async () => {
      try {
        const response = await clientaxiosInstance.get(`/casestudy/${id}`);
        setCaseStudy(response.data.data);
      } catch (error) {
        console.error("Error fetching casestudy data:", error);
      }
    };

    const fetchCaseStudys = async () => {
      try {
        const response = await clientaxiosInstance.get(`/casestudies`, {
          params: {
            isNeedFull: true,
          },
        });
        setCaseStudys(response.data.data.casestudys);
      } catch (error) {
        console.error("Error fetching casestudy data:", error);
      }
    };

    fetchCaseStudy();
    fetchCaseStudys();
  }, [id, casestudyId]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function trimDescription(content, wordLimit = 12) {
    // Check if content is defined and is a string
    if (typeof content !== "string") {
      return ""; // Return an empty string if content is not valid
    }

    // Split the content into words using spaces
    const words = content.split(" ");

    // Check if the number of words exceeds the limit
    if (words.length > wordLimit) {
      // Join only the first 'wordLimit' words and append an ellipsis
      return words.slice(0, wordLimit).join(" ") + "...";
    }

    // Return the content as is if within the limit
    return content;
  }

  const handleCaseStudyDetail = (id) => {
    navigate(`/casestudy-detail/${id}`);
  };

  //function to format date in the way dd.mm.yyy
  function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = d.getFullYear();

    return `${day}.${month}.${year}`;
  }
  // Example usage
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share this page",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully!"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      // Fallback if the browser doesn't support the share API
      console.log("Sharing is not supported in this browser");
    }
  };

  return (
    <Section>
      <ScrollProgressBar progress={scrollProgress} />
      <div className="wrapper">
        <SubContainer>
          <Left ref={casestudyRef}>
            {/* <CaseStudyScrollProgressBar progress={scrollProgress} /> */}

            {/* <Progress>20%</Progress> */}
            <DetailCard>
              <ImageContainer>
                <Image src={`${casestudy?.image}`} alt="CaseStudy Detail" />

                {/* <Progress>
                  <Number>100</Number>
                </Progress> */}
              </ImageContainer>
              <Detail>
                <Head className="sub-head">{casestudy?.title}</Head>
                <Content>{casestudy?.description}</Content>
                <End>
                  <BsFillShareFill onClick={handleShare} />
                  <span>1M Read</span>
                  <DateDisplay className="end">
                    {formatDate(casestudy?.createdAt)}
                  </DateDisplay>
                </End>
              </Detail>
            </DetailCard>
          </Left>
          {/* <Right>
            {casestudys ? (
              casestudys.length > 0 ? (
                casestudys
                  .filter((data) => data._id !== id)
                  .map((data, index) => (
                    <PostCard key={index}>
                      <img src={`${data.image}`} alt="Post" />
                      <div className="content">
                        <h4>{data?.title}</h4>
                        <p>{trimDescription(data?.content)}</p>
                        <Bottom>
                          <Button
                            onClick={() => handleCaseStudyDetail(data._id)}
                          >
                            READ MORE
                          </Button>
                          <DateDisplay>
                            {formatDate(data.createdAt)}
                          </DateDisplay>
                        </Bottom>
                      </div>
                    </PostCard>
                  ))
              ) : (
                <p>No casestudys available.</p>
              )
            ) : (
              <p>Loading...</p>
            )}
          </Right> */}
        </SubContainer>
      </div>
    </Section>
  );
};

export default CaseStudyDetailPage;

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

const Left = styled.div`
  position: relative;
`;
const CaseStudyScrollProgressBar = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: ${({ progress }) => progress}%;
  height: 5px;
  background-color: ${colors.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`;
const Progress = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
`;
const DetailCard = styled.div`
  background-color: ${colors.white};
  max-height: 680px;
  overflow: scroll;

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
// const Progress = styled.div`
//   position: absolute;
//   top: 30px;
//   right: 30px;
//   height: 60px;
//   width: 60px;
//   background-color: blue;
//   border-radius: 50%;
// `;
// const Number = styled.h3``;
const Head = styled.h2`
  color: ${colors.black};
  font-size: 30px;
`;

const Content = styled.p`
  font-size: 1rem;
  color: ${colors.black};
  margin-top: 1rem;
`;

const Right = styled.div`
  height: 680px;

  @media (max-width: 980px) {
    display: flex;
    height: unset;
    max-width: 840px;
    overflow-x: scroll;
  }
`;

const PostCard = styled.div`
  background-color: ${colors.white};
  overflow: hidden;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 100px; /* Adjust height for smaller screens */
    }
  }

  .content {
    padding: 1rem;

    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: ${colors.black};
    }

    p {
      font-size: 0.9rem;
      color: ${colors.black};
    }

    span {
      display: block;
      margin-top: 1rem;
      font-size: 0.8rem;
      color: #ff4500;
    }
  }

  @media (max-width: 980px) {
    min-width: max-content;
    margin-right: 20px;
  }
  @media (max-width: 540px) {
    min-width: 300px;
    margin-right: 20px;
  }
`;
const End = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  span {
    color: ${colors.black};
    font-weight: 300;
    font-size: 15px;
  }
  svg {
    cursor: pointer;
    color: ${colors.black};
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
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
const Button = styled.button`
  text-transform: uppercase;
  font-weight: 300;
`;
