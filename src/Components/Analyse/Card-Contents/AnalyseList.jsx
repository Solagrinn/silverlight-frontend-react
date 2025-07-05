import AnalyseListRow from './AnalyseListRow.jsx';

const AnalyseList = ({ targetUrlList }) => {
  return (
    <div>
      {targetUrlList.map((targetUrl, index) => {
        return <AnalyseListRow key={index} targetUrl={targetUrl}></AnalyseListRow>;
      })}
    </div>
  );
};
export default AnalyseList;
