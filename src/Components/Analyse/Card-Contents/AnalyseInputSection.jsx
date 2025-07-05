import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

const AnalyseInputSection = ({ setTargetUrlList }) => {
  const [urlToBeAnalysed, setUrlToBeAnalysed] = useState('');

  const checkRegex = (url) => {
    const pattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);
  };

  const isValid = checkRegex(urlToBeAnalysed);

  const handleChange = (e) => {
    setUrlToBeAnalysed(e.target.value);
  };

  const submitAnalyseForm = (e) => {
    e.preventDefault();
    if (isValid) {
      setTargetUrlList((prevList) => [...prevList, urlToBeAnalysed]);
      setUrlToBeAnalysed('');
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

export default AnalyseInputSection;
