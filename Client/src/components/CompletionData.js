import React from "react";

const CompletionData = ({ list }) => {
  const completeCount = list.filter((l) => l.complete === true).length;
  const totalCount = list.length;

  return (
    <div>
      <h1>Completed Goals</h1>
      <h5>You have completed {completeCount} goals so far!</h5>
      <p>Completion rate: {((totalCount / completeCount) * 100).toFixed(3)}</p>
    </div>
  );
};

export default CompletionData;
