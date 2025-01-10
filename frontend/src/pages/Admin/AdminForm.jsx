import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/baseurl";
import styled from "styled-components";
import SkeletonModule from "../../components/screens/Skeleton";
import { colors } from "../../ThemeConfig";
import Pagination from "../../components/screens/Pagination";

export const AdminForm = () => {
  const [contact, setcontact] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, settotalPages] = useState(null);

  useEffect(() => {
    // Fetch contact data from API
    fetchContact();
  }, [page]);

  const fetchContact = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/contacts/?page=${page}&limit=${limit}`
      );
      setcontact(response.data.data.contacts);
      setIsLoading(false);
      settotalPages(response.data.data.totalPages);
    } catch (error) {
      console.error("Error fetching Contact data:", error);
      setIsLoading(false);
    }
  };

  console.log(contact);
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  return (
    <div>
      <Head className="sub-head">Contact Enquiries</Head>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Company</Th>
            <Th>Mobile</Th>
            <Th>Date</Th>
            <Th>Message</Th>
            {/* <th>Action</th> */}
          </Tr>
        </Thead>
        <Tbody>
          {isLoading ? (
            <Td colSpan={7}>
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonModule
                  key={index}
                  width="100%"
                  height={70}
                  borderRadius={10}
                />
              ))}
            </Td>
          ) : contact.length === 0 ? ( // Check if data is empty
            <NoData>No data available</NoData>
          ) : (
            <>
              {contact.map((item, index) => (
                <Tr key={index}>
                  <Td> {(page - 1) * limit + index + 1}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.company}</Td>
                  <Td>{item.mobile}</Td>
                  <Td>{item.date ? formatDate(item.date) : "N/A"}</Td>
                  <Td>{item.message}</Td>
                  {/* <td>
                    <Button onClick={() => openModal(item)}>Delete</Button>
                  </td> */}
                </Tr>
              ))}
            </>
          )}
        </Tbody>
      </Table>
      <Pagination
        initialPage={page}
        totalPages={totalPages}
        getData={setPage}
      />
    </div>
  );
};
const Head = styled.h3``;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  background-color: ${colors.grey_background};
  border-radius: 10px;
`;
const Tbody = styled.thead``;

const Tr = styled.tr`
  background-color: ${colors.grey_background};
  border-bottom: 1px solid ${colors.grey_border};

  &:nth-child(even) {
    background-color: ${colors.box_background};
  }
`;
const Thead = styled.thead``;
const Th = styled.th`
  background-color: ${colors.box_background};
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid ${colors.grey_border};
`;

const Td = styled.td`
  font-weight: 400;
  padding: 10px;
  text-align: left;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: ${colors.theme_red};
`;

const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin-top: 2rem;
`;
