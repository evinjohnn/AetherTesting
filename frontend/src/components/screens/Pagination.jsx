import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../ThemeConfig";

const Pagination = ({ initialPage, totalPages, getData }) => {
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    if (typeof getData === "function") {
      getData(page);
    }
  }, [page, getData]);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <PageNumber
            key={i}
            active={i === page}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </PageNumber>
        );
      }
    } else {
      pageNumbers.push(
        <PageNumber
          key={1}
          active={1 === page}
          onClick={() => handlePageClick(1)}
        >
          1
        </PageNumber>
      );

      if (page > 4) {
        pageNumbers.push(<Ellipsis key="start">...</Ellipsis>);
      }

      const startPage = Math.max(2, page - 2);
      const endPage = Math.min(totalPages - 1, page + 2);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <PageNumber
            key={i}
            active={i === page}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </PageNumber>
        );
      }

      if (page < totalPages - 3) {
        pageNumbers.push(<Ellipsis key="end">...</Ellipsis>);
      }

      pageNumbers.push(
        <PageNumber
          key={totalPages}
          active={totalPages === page}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </PageNumber>
      );
    }

    return pageNumbers;
  };

  return (
    totalPages > 1 && (
      <PaginationContainer>
        <NavButton onClick={handlePrevClick} disabled={page === 1}>
          &lt;
        </NavButton>
        {renderPageNumbers()}
        <NavButton onClick={handleNextClick} disabled={page === totalPages}>
          &gt;
        </NavButton>
      </PaginationContainer>
    )
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

const NavButton = styled.button`
  background-color: ${colors.primary_header};
  color: ${colors.off_white};
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primary_header_hover};
  }

  &:disabled {
    background-color: ${colors.disabled};
    cursor: not-allowed;
  }
`;

const PageNumber = styled.button`
  background-color: ${({ active }) =>
    active ? colors.primary_header : colors.off_white};
  color: ${({ active }) => (active ? colors.off_white : colors.primary_header)};
  border: 1px solid ${colors.primary_header};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ active }) =>
      active ? colors.primary_header_hover : colors.primary_header_light};
    color: ${colors.off_white};
  }
`;

const Ellipsis = styled.span`
  color: ${colors.primary_header};
  font-size: 1rem;
  padding: 0 5px;
  cursor: default;
`;
