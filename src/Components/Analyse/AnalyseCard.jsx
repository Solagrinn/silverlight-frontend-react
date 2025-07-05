import { Card } from 'react-bootstrap';
import AnalyseInputSection from './Card-Contents/AnalyseInputSection.jsx';
import AnalyseList from './Card-Contents/AnalyseList.jsx';
import { useState } from 'react';
import AnalysisModal from './Modal-Contents/AnalysisModal.jsx';
import PageSelector from './Card-Contents/PageSelector.jsx';

const AnalyseCard = () => {
  const [targetUrlList, setTargetUrlList] = useState([]);
  const [selectedAnalysis, setSelectedAnalysis] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Card style={{ width: '500px' }}>
        <Card.Body>
          <Card.Title>SilverLight</Card.Title>

          <AnalyseInputSection setTargetUrlList={setTargetUrlList}></AnalyseInputSection>

          <AnalyseList
            targetUrlList={targetUrlList}
            setSelectedAnalysis={setSelectedAnalysis}
            currentPage={currentPage}
          ></AnalyseList>
        </Card.Body>
        <Card.Footer>
          <PageSelector
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPageCount={Math.ceil(targetUrlList.length / 3)}
            maxVisible={5}
          ></PageSelector>
        </Card.Footer>
      </Card>

      <AnalysisModal
        selectedAnalysis={selectedAnalysis}
        setSelectedAnalysis={setSelectedAnalysis}
      ></AnalysisModal>
    </>
  );
};
export default AnalyseCard;
