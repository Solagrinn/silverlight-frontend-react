import { Button, Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';

const PageSelector = ({
  totalPageCount,
  currentPage,
  setCurrentPage,
  maxVisible = 5, // total buttons including current page
}) => {
  useEffect(() => {
    if (totalPageCount > currentPage) {
      setCurrentPage(totalPageCount);
    }
  }, [totalPageCount, setCurrentPage]);

  const half = Math.floor(maxVisible / 2);
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPageCount, currentPage + half);

  // shift if we are near the edges
  if (currentPage <= half) {
    end = Math.min(totalPageCount, maxVisible);
  } else if (currentPage + half > totalPageCount) {
    start = Math.max(1, totalPageCount - maxVisible + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <Row className="justify-content-center">
      {pages.map((page) => (
        <Col xs="auto" key={page}>
          <Button
            variant={page === currentPage ? 'primary' : 'outline-primary'}
            onClick={() => setCurrentPage(page)}
            disabled={page === currentPage}
          >
            {page}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default PageSelector;
