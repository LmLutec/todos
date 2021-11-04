import React from "react";

const CompletionData = ({ list }) => {
  const completeCount = list.filter((l) => l.complete === true).length;
  const totalCount = list.length;

  return (
    <div>
      <h1>Completed Goals</h1>
      <h5>You have completed {completeCount} goals so far!</h5>
      <p>Completion rate: {((completeCount / totalCount) * 100).toFixed(0)}%</p>
    </div>
  );
};

export default CompletionData;

// .toFixed(3)
