import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
//import staticData from '../../../../respose.json';
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
    // return {...staticData} // For testing without spending api credits

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
      <Col className={'align-content-center'}>
        <Row>
          <Col className={'fw-semibold '} xs={'auto'} md={2}>
            {index}
          </Col>
          <Col>{targetUrl}</Col>
        </Row>
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
