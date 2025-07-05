import { Card } from 'react-bootstrap';
import AnalseInputSection from './Card-Contents/AnalseInputSection.jsx';
import AnalyseList from './Card-Contents/AnalyseList.jsx';
import { useState } from 'react';

const AnalyseCard = () => {
  const [targetUrlList, setTargetUrlList] = useState([]);

  return (
    <Card style={{ width: '500px' }}>
      <Card.Body>
        <Card.Title>SilverLight</Card.Title>

        <AnalseInputSection setTargetUrlList={setTargetUrlList}></AnalseInputSection>

        <AnalyseList targetUrlList={targetUrlList}></AnalyseList>
      </Card.Body>
    </Card>
  );
};
export default AnalyseCard;
