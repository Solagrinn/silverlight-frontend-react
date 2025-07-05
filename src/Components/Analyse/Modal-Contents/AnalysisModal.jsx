import { Button, Card, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const AnalysisModal = ({ selectedAnalysis, setSelectedAnalysis }) => {
  const [selectedGroup, setSelectedGroup] = useState([]);

  const groupNames = Object.keys(selectedAnalysis || {});

  const handleChooseGroup = (groupName) => {
    setSelectedGroup(selectedAnalysis[groupName]);
  };

  useEffect(() => {
    console.log(selectedGroup);

    debugger;
  }, [selectedGroup]);

  return (
    <Modal show={selectedAnalysis} onHide={() => setSelectedAnalysis(null)}>
      <Modal.Header closeButton> Analysis</Modal.Header>

      <Modal.Body>
        <div className="d-flex overflow-x-auto">
          {groupNames.map((groupName, index) => {
            return (
              <Button
                key={index}
                variant="outline-primary"
                className="m-2 text-nowrap"
                onClick={() => handleChooseGroup(groupName)}
              >
                {groupName}
              </Button>
            );
          })}
        </div>

        {selectedGroup.map((text, index) => {
          return (
            <Card key={index} className="mt-3 p-2">
              {text}
            </Card>
          );
        })}
      </Modal.Body>
    </Modal>
  );
};
export default AnalysisModal;
