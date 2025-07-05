import AnalyseListRow from './AnalyseListRow.jsx';

const AnalyseList = ({ targetUrlList, setSelectedAnalysis, currentPage }) => {
  return (
    <div>
      {targetUrlList.map((targetUrl, index) => {
        return (
          <AnalyseListRow
            key={index}
            index={index}
            currentPage={currentPage}
            targetUrl={targetUrl}
            setSelectedAnalysis={setSelectedAnalysis}
          ></AnalyseListRow>
        );
      })}
    </div>
  );
};
export default AnalyseList;
