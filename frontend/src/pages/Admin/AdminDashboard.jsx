import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/baseurl";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";

const AdminDashboard = () => {
  const [dashboard, setdashboard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch dashboard data from API
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/dashboard-count`);
      setdashboard(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Dashboard data:", error);
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <Container>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <CardContainer>
              <Card>
                <Name>
                  <h2>
                    Total <br /> Enquiries
                  </h2>
                </Name>
                <Name>
                  <p>{dashboard?.dashboardCounts}</p>
                </Name>
              </Card>
              <Card>
                <Name>
                  <h2>Total Questionnaires</h2>
                </Name>
                <Name>
                  <p>{dashboard?.questionairecounts}</p>
                </Name>
              </Card>
            </CardContainer>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default AdminDashboard;

const Section = styled.div``;
const Container = styled.div``;
const Name = styled.div`
  background-image: linear-gradient(rgba(26, 118, 183, 1), #7a37b1, #c72c34);
  background-clip: text;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
const Card = styled.div`
  margin-top: 20px;
  background-color: ${colors.grey_background};
  padding: 20px;
  display: grid;
  gap: 60px;
  border-radius: 5px;
  h2 {
    color: transparent;
    font-size: 27px;
    font-weight: 500;
    text-align: left;
    height: 100px;
  }
  p {
    font-size: 60px;
    font-weight: 800;
    text-align: right;
    color: transparent;
  }
  @media (max-width: 600px) {
    p {
      font-size: 18px;
    }
  }
`;
