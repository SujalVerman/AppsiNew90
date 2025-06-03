import React from 'react';

const TemplateCard = ({ title, source }) => {
  return (
    <div id="template-card" style={{marginTop:"30%"}}>
      <div id="template-image"></div>
      <div id="template-info">
        <p id="template-title">{title}</p>
        <small id="template-source">{source}</small>
      </div>
    </div>
  );
};

export default TemplateCard;
