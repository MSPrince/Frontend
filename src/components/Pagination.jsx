import React from "react";

function Pagination({ onPageChange, currentPage, blogs, pageSize }) {
  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderPagination = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(pageNumber);
            }}
          >
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return (
    <ul className="pagination my-8 flex justify-center items-center list-none m-0 p-0">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="cursor-pointer"
        >
          Previous
        </button>
      </li>
      {renderPagination()}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="cursor-pointer"
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
