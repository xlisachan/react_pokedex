import React from 'react';

import '../index.scss';

const Header = ({ trainer }) => (
  <div>
    <div>
      <span className="trainer-stat">Name</span>
      
      <span className="trainer-info">{trainer.name}</span>
    </div>

    <div>
      <span className="trainer-stat"># of pokemon caught</span>

      <span className="trainer-info">
        {trainer.pokedex.length} / 802
      </span>
    </div>
  </div>
);
 
export default Header;
