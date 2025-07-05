import { Button, Card, Modal } from 'react-bootstrap';
import { useState } from 'react';

const AnalysisModal = ({ selectedAnalysis, setSelectedAnalysis }) => {
  const [selectedGroup, setSelectedGroup] = useState([]);
  const [selectedGroupName, setSelectedGroupName] = useState('');

  const groupNames = Object.keys(selectedAnalysis || {});

  const handleChooseGroup = (groupName) => {
    setSelectedGroup(selectedAnalysis[groupName]);
    setSelectedGroupName(groupName);
  };

  const handleOnHide = () => {
    setSelectedAnalysis(null);
    setSelectedGroup([]);
    setSelectedGroupName('');
  };

  return (
    <Modal show={selectedAnalysis} onHide={() => handleOnHide()}>
      <Modal.Header closeButton> Analysis</Modal.Header>

      <Modal.Body>
        <div className="d-flex overflow-x-auto">
          {groupNames.map((groupName, index) => {
            return (
              <Button
                key={index}
                disabled={selectedGroupName === groupName}
                variant="warning"
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
