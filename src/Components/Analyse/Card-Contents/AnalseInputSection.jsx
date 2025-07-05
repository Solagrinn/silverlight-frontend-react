import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const AnalseInputSection = ({ setTargetUrlList }) => {
  const [urlToBeAnalysed, setUrlToBeAnalysed] = useState('');
  const [isCheckingForExistence, setIsCheckingForExistence] = useState(false);
  const [isValid, setIsValid] = useState(null);

  const checkRegex = (url) => {
    const pattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);
  };

  const checkForResponse = async (url) => {
    try {
      const res = await axios.get('/api/validate-url', {
        params: { url },
      });
      return res.data.valid;
    } catch (err) {
      console.error('URL validation failed:', err);
      return false;
    }
  };

  const checkUrlValidity = async (urlToCheck) => {
    if (checkRegex(urlToCheck)) {
      setIsCheckingForExistence(true);
      const valid = await checkForResponse(urlToCheck);
      setIsValid(valid);
      setIsCheckingForExistence(false);
    } else {
      setIsValid(false);
    }
  };

  const handleChange = (e) => {
    setUrlToBeAnalysed(e.target.value);
    setIsValid(null); // Reset validity while typing
  };

  const submitAnalyseForm = (e) => {
    e.preventDefault();
    if (isValid) {
      setTargetUrlList((prevList) => [...prevList, urlToBeAnalysed]);
      setUrlToBeAnalysed('');
      setIsValid(null);
    }
  };

  return (
    <div>
      <Form onSubmit={submitAnalyseForm}>
        <Row>
          <Col>
            <Form.Control
              type="url"
              value={urlToBeAnalysed}
              onChange={handleChange}
              placeholder="https://example.com"
              required
            />
          </Col>
          <Col xs="auto">
            <div style={{ width: 90 }}>
              {isCheckingForExistence ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <Button
                  onClick={() => checkUrlValidity(urlToBeAnalysed)}
                  className="w-100"
                  variant="outline-success"
                  disabled={isValid}
                >
                  Validate
                </Button>
              )}
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3 mb-3">
          <Col xs={12}>
            <Button type="submit" disabled={!isValid} className="w-100">
              Analyse
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col xs={12}></Col>
        </Row>
      </Form>
    </div>
  );
};

export default AnalseInputSection;
