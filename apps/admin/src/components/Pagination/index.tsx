import React, { useEffect, useState } from "react";
import { useInputValue } from "../../hooks/useInputValue";

type PaginationProps = {
  children: React.ReactNode[];
};

export const Pagination: React.FC<PaginationProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [startIndex, setStartIndex] = useState(
    (currentPage - 1) * itemsPerPage
  );
  const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage);
  const [filteredItems, setFilteredItems] = useState(
    children.slice(startIndex, endIndex)
  );
  const [totalPages, setTotalPages] = useState(children.length / itemsPerPage);

  const paginationInput = useInputValue("5");
  useEffect(() => {
    setFilteredItems(children);
  }, [children]);

  useEffect(() => {
    setStartIndex((currentPage - 1) * itemsPerPage);
    setEndIndex(startIndex + itemsPerPage);
    setTotalPages(children.length / itemsPerPage);
    
  }, [itemsPerPage, currentPage, filteredItems]);

  useEffect(() => {
    const filteredItems = children.slice(startIndex, endIndex);
    
    
    setFilteredItems(filteredItems);
  }, [startIndex, endIndex,children]);

  useEffect(() => {
    handlePagination();
  }, [paginationInput.value]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePagination = () => {

    setItemsPerPage(parseInt(paginationInput.value));
  };

  return (
    <div style={{ position: "relative" }}>
      <ul style={{ overflowY: "scroll", height: "50vh" }}>
        {filteredItems.map((ChildComponent: React.ReactNode, index) => {
          return <React.Fragment key={index}>{ChildComponent}</React.Fragment>;
        })}
      </ul>
      <div
        className="option"
        style={{ left: "40%", bottom: -80, position: "absolute" }}
      >
        <button onClick={handlePrevPage}>Previous</button>
        <select name="" id="" {...paginationInput}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button onClick={handleNextPage}>Next</button>
        <h6>Current Page: {currentPage}</h6>
      </div>
    </div>
  );
};
