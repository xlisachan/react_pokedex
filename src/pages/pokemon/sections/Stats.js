import React from 'react';

const Stats = ({ pokemon }) => {
  const getStatus = (stats, statData) => {
    let width;

    if (stats === 'hp' || stats === 'atk') {
      width = statData / 255 * 100;
    } else {
      width = statData / 548 * 100;
    }

    return (
      <div className="pokemon-body status">
        <div style={{display: 'flex', width: '35%'}}>
          <div style={{width: '50%'}}>{stats} </div>
          <div>{statData}</div>
        </div>

        <div className="status-outline">
          <div className="status-bar" style={{ width: `${width}%` }}></div>
        </div>
      </div>
    )
  };

  return (
    <section>
      <p className="pokemon-header">Base Stats</p>
      {getStatus("hp", pokemon.hp)}
      {getStatus("atk", pokemon.atk)}
      {getStatus("def", pokemon.def)}
    </section>
  );
}

export default Stats;