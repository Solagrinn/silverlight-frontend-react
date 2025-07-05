import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const AnalyseListRow = ({ targetUrl }) => {
  const [isAnalysisDone, setIsAnalysisDone] = useState(false);
  const [isErrorShown, setIsErrorShown] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    sendAnalysisRequest(targetUrl).then((r) => {
      setResponse(r);
      setIsAnalysisDone(true);
    });
  }, [targetUrl]);

  useEffect(() => {
    console.log(response);
  }, [response]);

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

  return (
    <Row className={'justify-content-between mt-3'}>
      <Col xs={'auto'} className={'align-content-center'}>
        {targetUrl}
      </Col>
      <Col xs={'auto'}>
        {isAnalysisDone && !isErrorShown ? (
          <Button>View</Button>
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
