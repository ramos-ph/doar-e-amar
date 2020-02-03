import React from 'react';

import './styles.css';

import downloading_updates from '../../../../assets/img/icons/downloading-updates-48.png';

export default function SectionAbout() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="sobre-background">

        </div>
        <div className="sobre-info">
          <strong>Doar & Amar</strong>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi corrupti ipsa dolore voluptatem culpa delectus non, perspiciatis distinctio veritatis vitae accusantium expedita iusto, repellat officia sunt autem dolorem quam accusamus!</p>

          <a href="#sobre">
            <button>
              Saiba Mais
              <img src={downloading_updates} alt="" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}