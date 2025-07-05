import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const AnalyseListRow = ({ targetUrl, setSelectedAnalysis, currentPage, index }) => {
  const [isAnalysisDone, setIsAnalysisDone] = useState(false);
  const [isErrorShown, setIsErrorShown] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    sendAnalysisRequest(targetUrl).then((r) => {
      setResponse(r);
      setIsAnalysisDone(true);
    });
  }, [targetUrl]);

  const sendAnalysisRequest = async (url) => {
    try {
      const res = await axios.get('/api/builtwith', {
        params: { url },
      });
      return res.data;
    } catch (err) {
      console.error('Builtwith call failed:', err);
      setIsErrorShown(true);
    }
  };

  const isShown = () => {
    if (index < currentPage * 3 && index >= currentPage * 3 - 3) {
      return true;
    }
    return false;
  };

  return (
    <Row
      className={`justify-content-between bg-secondary-subtle rounded-3 p-1 mt-3 ${isShown() ? '' : 'd-none'}`}
    >
      <Col xs={'auto'} className={'align-content-center'}>
        <span className={'fw-semibold me-3'}>{index}</span> {targetUrl}
      </Col>
      <Col xs={'auto'}>
        {isAnalysisDone && !isErrorShown ? (
          <Button
            variant={'secondary'}
            onClick={() => {
              setSelectedAnalysis(response);
            }}
          >
            View
          </Button>
        ) : isErrorShown ? (
          'Error'
        ) : (
          'Analysing...'
        )}
      </Col>
    </Row>
  );
};
export default AnalyseListRow;
