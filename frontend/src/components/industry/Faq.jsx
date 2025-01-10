import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import { clientaxiosInstance } from "../../utils/baseurl";

const FAQ = ({ section, sub_section }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [faq, setFaq] = useState([]);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  useEffect(() => {
    // Fetch blog data from API
    const fetchFaq = async () => {
      try {
        const response = await clientaxiosInstance.get("/faqs", {
          params: {
            section,
            sub_section,
          },
        });
        setFaq(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };

    fetchFaq();
  }, []);
  console.log("faq", faq);

  return (
    <MainContainer>
      <div className="wrapper">
        <Container>
          <h2 className="sub-head">Faq</h2>
          <Accordion>
            {faq && faq.length > 0 ? (
              faq.map((data) => (
                <div key={data._id} className="accordion-item">
                  <Button
                    aria-expanded={expandedId === data._id}
                    onClick={() => toggleAccordion(data._id)}
                  >
                    <span className="accordion-title">
                      <span className="q">Q : </span>
                      {data.question}
                    </span>
                    <span className="icon" aria-hidden="true"></span>
                  </Button>
                  <Content expanded={expandedId === data._id}>
                    <p>{data.answers}</p>
                  </Content>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center " }}>No FAQ's Available</p>
            )}
          </Accordion>
        </Container>
      </div>
    </MainContainer>
  );
};

export default FAQ;
const MainContainer = styled.section``;
const Container = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Accordion = styled.div`
  display: grid;
  gap: 20px;

  .accordion-item {
    border: 2px solid transparent;
    border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
    border-image-slice: 1;

    button[aria-expanded="true"] {
      border-bottom: 1px solid ${colors.theme_red};
    }
  }
`;

const Button = styled.button`
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: ${colors.white};
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;

  /* &:hover,
  &:focus {
    cursor: pointer;
    color: ${colors.theme_red};
  } */
  .q {
    font-family: "Quicksand";
    font-weight: 600;
    font-size: 18px;
    color: ${colors.theme_red};
  }

  .accordion-title {
    padding: 20px;

    @media screen and (max-width: 430px) {
      display: inline-block;
      width: 320px;
    }
  }

  .icon {
    display: inline-block;
    position: absolute;
    top: 18px;
    right: 0;
    width: 22px;
    height: 22px;
    border: 1px solid;
    border-radius: 22px;
    margin: 0 20px;
    background-color: ${colors.white};
    &::before {
      display: block;
      position: absolute;
      content: "";
      top: 9px;
      left: 5px;
      width: 10px;
      height: 2px;
      background: ${colors.theme_red};
    }

    &::after {
      display: block;
      position: absolute;
      content: "";
      top: 5px;
      left: 9px;
      width: 2px;
      height: 10px;
      background: ${colors.theme_red};
    }
  }

  &[aria-expanded="true"] {
    color: ${colors.theme_red};

    .icon {
      &::after {
        width: 0;
      }
    }
  }
`;
const Content = styled.div`
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  max-height: ${({ expanded }) => (expanded ? "18em" : "0")};
  overflow: scroll;
  transition: opacity 200ms linear, max-height 200ms linear;

  p {
    font-size: 1rem;
    font-weight: 300;
    padding: 20px;
    width: 95%;
    margin: 20px auto;
    background: ${colors.white};
    color: ${colors.black};
  }
`;
