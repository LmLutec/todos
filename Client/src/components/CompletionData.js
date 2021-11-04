import React from "react";
import "../styles/CompletionData.css";

const CompletionData = ({ list }) => {
  const completeCount = list.filter((l) => l.complete === true).length;
  const totalCount = list.length;

  return (
    <div className="completionData">
      {/* <h1>Completed Goals</h1> */}
      <h5>You have completed {completeCount} goals so far!</h5>
      <p>Completion rate: {((completeCount / totalCount) * 100).toFixed(0)}%</p>
    </div>
  );
};

export default CompletionData;

// .toFixed(3)
