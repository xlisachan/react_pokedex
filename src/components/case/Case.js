import React, {useRef} from 'react';
import './Case.scss';
import Main from './Main';
import start from '../../assets/audio/start.mp4';

const Case = () => {
  const topEl = useRef(),
        botEl = useRef(),
        topButton = useRef(),
        botButton = useRef(),
        audio = new Audio(start);
  
  const handleClick = () => {
    return topEl.current.style.top === '24vh' ?
      (
        topEl.current.style.top = '0vh',
        botEl.current.style.top = '0vh',
        topButton.current.classList.remove('infinite'),
        botButton.current.classList.remove('infinite'),
        audio.play()
      )
      :
      (
        topEl.current.style.top = '24vh',
        botEl.current.style.top = '-24vh',
        topButton.current.classList.add('infinite'),
        botButton.current.classList.add('infinite')
      );
  }
  
  return (
    <div className="wrapper">
      <div ref={topEl} className="case case-top" style={{top: "24vh"}}>
        <div className="circle-black top-outer">
          <div ref={topButton} className="circle-blue top-inner animated infinite pulse" onClick={handleClick}></div>
        </div>
      </div>
      
      <Main />
      
      <div ref={botEl} className="case case-bottom" style={{top: "-24vh"}}>
        <div className="circle-black bottom-outer">
          <div ref={botButton} className="circle-blue bottom-inner animated infinite pulse" onClick={handleClick}></div>
        </div>
      </div>
    </div>
  );
};

export default Case;