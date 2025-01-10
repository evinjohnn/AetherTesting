import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/baseurl";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";
import Pagination from "../../components/screens/Pagination";

const AdminQuestionaire = () => {
  const [questionaire, setQuestionaire] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchQuestionaire();
  }, [page]);

  const fetchQuestionaire = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/questionaire/?page=${page}&limit=${limit}`
      );
      setIsLoading(false);
      setQuestionaire(response.data.data.questionaire);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching Questionaire data:", error);
    }
  };

  return (
    <Container>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Email</th>
              <th>Questions & Answers</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="2" align="center">
                  Loading...
                </td>
              </tr>
            ) : questionaire.length > 0 ? (
              questionaire.map((item) => (
                <tr key={item._id}>
                  <td>{item.email}</td>
                  <td>
                    <AnswerList>
                      {item.answers.map((data) => (
                        <AnswerItem key={data._id}>
                          <strong>Q:</strong> {data.question} <br />
                          <strong>A:</strong> {data.answer}
                        </AnswerItem>
                      ))}
                    </AnswerList>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" align="center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TableWrapper>
      <Pagination
        initialPage={page}
        totalPages={totalPages}
        getData={setPage}
      />
    </Container>
  );
};

export default AdminQuestionaire;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 8px;
  padding: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
  }

  tbody tr:nth-child(odd) {
    background-color: ${colors.grey_background};
  }

  tbody tr:nth-child(even) {
    background-color: ${colors.grey_border};
  }
`;

const AnswerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AnswerItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.5;
`;
