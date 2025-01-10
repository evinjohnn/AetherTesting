import React, { useEffect, useState } from "react";
import { colors } from "../../ThemeConfig";
import styled, { keyframes } from "styled-components";
import { axiosInstance } from "../../utils/baseurl";
import SkeletonModule from "../../components/screens/Skeleton";
import EditDelete from "../../components/AdminReusables/EditDelete";
import { GoPlus } from "react-icons/go";
import PlatformWhoWeAreForm from "./Forms/PlatfromWhoWeAre";

const PlatformWhoWeAre = () => {
  const [whoweare, setwhoweare] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [storedId, setStoredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalPages, settotalPages] = useState(null);
  const [editData, seteditData] = useState(null);
  const [isNew, setisNew] = useState(true);

  useEffect(() => {
    fetchClient();
  }, [page]);

  const fetchClient = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/platformwhoweare`);
      setwhoweare(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Client data:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setisNew(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setisNew(false);
    seteditData(null);
  };

  const handleRefresh = () => {
    console.log("refresh");
    fetchClient();
  };

  const handleEditClick = (data) => {
    setIsModalOpen(true);
    seteditData(data);
    setisNew(false);
  };

  return (
    <Section>
      <div className="container">
        <Header>
          <h1>Manage Who we are</h1>
          {whoweare.length > 0 ? null : (
            <ButtonContainer onClick={openModal}>
              <GoPlus />
              Add Client
            </ButtonContainer>
          )}
        </Header>
        {isLoading ? (
          "Loading..."
        ) : whoweare.length === 0 ? ( // Check if data is empty
          <NoData>No data available</NoData>
        ) : (
          <>
            <WhoWeAreContainer>
              {whoweare.map((item, index) => (
                <WhoWeAreCard key={index}>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <Description>
                      <WhoWeAreDescription>{item.title}</WhoWeAreDescription>
                      <WhoWeAreDescription>
                        {item.description}
                      </WhoWeAreDescription>
                    </Description>
                    <WrapperContainer>
                      {item.card.map((card, cardIndex) => (
                        <WhoWeAreCardContainer key={cardIndex}>
                          <WhoWeAreCardNumberContainer>
                            <WhoWeAreCardNumber>
                              {card.count}
                            </WhoWeAreCardNumber>
                          </WhoWeAreCardNumberContainer>
                          <WhoWeAreCardDescriptionContainer>
                            <WhoWeAreCardDescription>
                              {card.title}
                            </WhoWeAreCardDescription>
                          </WhoWeAreCardDescriptionContainer>
                        </WhoWeAreCardContainer>
                      ))}
                    </WrapperContainer>
                  </div>
                  <WhoWeAreImageContainer>
                    <WhoWeAreImage
                      src={item.image}
                      alt={`Who We Are ${index + 1}`}
                    />
                  </WhoWeAreImageContainer>
                  {/* <ButtonContainer>
                    <EditButton onClick={() => handleEditClick(item)}>
                      Edit
                    </EditButton>
                  </ButtonContainer> */}
                  {whoweare.length > 0 ? (
                    <EditDelete handleEdit={() => handleEditClick(item)} />
                  ) : null}
                </WhoWeAreCard>
              ))}
            </WhoWeAreContainer>
          </>
        )}
      </div>

      {isModalOpen && (
        <PlatformWhoWeAreForm
          onRequestClose={closeModal}
          refresh={handleRefresh}
          editData={editData}
          isNew={isNew}
        />
      )}
    </Section>
  );
};

export default PlatformWhoWeAre;

const Section = styled.section``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;

const AddButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${colors.theme_red};
  color: ${colors.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;

const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin-top: 2rem;
`;

const WhoWeAreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const WhoWeAreCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  overflow: hidden;

  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem 0;
`;

const WhoWeAreImageContainer = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  border: 1px solid rgba(255, 255, 255);
`;

const WhoWeAreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Description = styled.div`
  margin-top: 1rem;
`;
const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const WhoWeAreDescription = styled.p`
  font-size: 1.2rem;
  color: ${colors.white};
  margin: 0;
`;

const WhoWeAreCardContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  background-color: ${colors.grey_background || "#333"};
  padding: 10px 30px;
`;

const WhoWeAreCardNumberContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.white};
  margin-right: 1rem;
`;

const WhoWeAreCardNumber = styled.span``;

const WhoWeAreCardDescriptionContainer = styled.div`
  flex: 1;
`;

const WhoWeAreCardDescription = styled.p`
  font-size: 1rem;
  color: ${colors.white};
  margin: 0;
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${colors.white};

  &:hover {
    opacity: 0.9;
  }
`;

const EditButton = styled(Button)`
  background-color: ${colors.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const DeleteButton = styled(Button)`
  background-color: ${colors.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const ButtonContainer = styled.button`
  background-color: ${colors.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${colors.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${colors.white};
    font-size: 20px;
  }
`;
