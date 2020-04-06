import React from 'react';

const Header = ({ trainer }) => (
  <section>
    <div className="trainer-stats">
      <p style={{ marginRight: "1rem" }}>Name</p>
      
      <p className="trainer-data">{trainer.name}</p>
    </div>

    <div className="trainer-stats">
      <p style={{marginRight: "1rem"}}># of pokemon caught{' '}</p>

      <p className="trainer-data">
        {trainer.pokedex.length} / 802
      </p>
    </div>
  </section>
);
 
export default Header;