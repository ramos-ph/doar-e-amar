import React from 'react';

import './styles.css';
import './animations.css';

export default function SectionDashboard() {
  return (
    <section id="painel">
      <div className="container">
        <div className="slider">
          <div className="slide"><h1>Faça a diferença!</h1></div>
          <div className="slide"><h1>O seu pouco pode ser muito!</h1></div>
          <div className="slide"><h1>Agasalhe os que tem frio!</h1></div>
          <div className="slide"><h1>Contribua com mais 8359 pessoas!</h1></div>
        </div>
      </div>
    </section>
  );
}