import React from 'react';
import TemplateCard from './TemplateCard';
import { useNavigate } from 'react-router-dom';

const templates = [
  { id: 1, title: 'Patrick Bradley', source: 'WrapBootstrap' },
  { id: 2, title: 'Madelyn Torff', source: 'Figma' },
  { id: 3, title: 'Marie Williams', source: 'TemplatesJungle.com' },
  { id: 4, title: 'Haris K. Watson', source: 'Colorlib' },
  { id: 5, title: 'Mark Reccardo', source: 'Pinterest' },
  { id: 6, title: 'John Carter', source: 'Webflow' },
  { id: 7, title: 'John Doe', source: 'W3Layouts' },
  { id: 8, title: 'Creative Portfolio', source: 'TemplatesJungle.com' },
  { id: 9, title: 'Portfolio White', source: 'Dribbble' },
  { id: 10, title: 'Rahi Satner', source: 'Grapesjs' },
  { id: 11, title: 'Jell Michal', source: 'SqlAlchemy' },
  { id: 12, title: 'Loaral popu', source: 'Graphql' },
  { id: 13, title: 'James podriv', source: 'Postgre' },
  { id: 14, title: 'John taley', source: 'Java' },
  
];

const TemplateGrid = () => {
  const navigate = useNavigate();
  return (
    <div id="template-grid">
      <p className="text-dark" style={{fontSize:"15px",fontWeight:"500"}} id="back-button" onClick={()=>{navigate("/")}}>&lt; Back</p>
      <div id="grid-container">
        {templates.map((template) => (
          <TemplateCard key={template.id} title={template.title} source={template.source} />
        ))}
      </div>
      <button className=' back-home-btn' style={{position:"relative",top:"20px",left:"50%"}} onClick={()=>{navigate("/studio")}} >continue</button>
    </div>
  );
};

export default TemplateGrid;
