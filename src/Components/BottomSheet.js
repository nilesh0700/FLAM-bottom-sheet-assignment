
import React, { useState } from 'react';
import './BottomSheet.css';
import { SocialIcon } from 'react-social-icons';

const BottomSheet = () => {
  const [snapPoint, setSnapPoint] = useState('closed');
  const handleToggle = () => {
    setSnapPoint(snapPoint === 'close' ? 'fully-open' : 'closed');
  };

  return (

    <div className={`bottom-sheet ${snapPoint}`}>

      <div className="snap-points">
        <div className="handle"></div>
        <button className='button-17' onClick={handleToggle}>
          {snapPoint === 'closed' ? 'Closed' : 'Close'}
        </button>
        <button className='button-17' onClick={() => setSnapPoint('half-open')}>Half Open</button>
        <button className='button-17' onClick={() => setSnapPoint('fully-open')}>Fully Open</button>
        <h2>More about Me!!!</h2>
      </div>

      <div className="content">
        <div className='content links'>
          <ul>
            <li>  <SocialIcon href='https://github.com/nilesh0700' className="fab fa-google-plus-g" fallback='github' aria-hidden="true" /></li>
            <li>  <SocialIcon href='https://linkedin/in/nilesh0700' className="fab fa-google-plus-g" fallback='linkedin' aria-hidden="true" /></li>
            <li>  <SocialIcon href='https://twitter.com/_nilesh_t' className="fab fa-google-plus-g" fallback='twitter' aria-hidden="true" /></li>
            <li>  <SocialIcon href='https://instagram.com/eighteen.argon?igshid=OGQ5ZDc2ODk2ZA==' className="fab fa-google-plus-g" fallback='instagram' aria-hidden="true" /></li>
          </ul>
        </div>
        <hr></hr>
        <div className='about'>
          <p >
            Hey there, I'm Nilesh Thengde, and I'm on a journey that blends the art of web development with the magic of Artificial Intelligence and Machine Learning. 🌐🧠
            <br />
            <br />
            In 2024, I'll be donning my graduation cap with a degree in AIML (Artificial Intelligence and Machine Learning). But my passion for this dynamic field isn't confined to the classroom—it's a fire that burns bright in everything I do.
            <br />
            <br />
            💡 I believe in the power of innovation, and I've honed my skills in a diverse range of technologies, including HTML5, CSS3, JavaScript, React.js, and more. 🛠️
            <br />
            <br />
            🤖 But that's just the tip of the iceberg. My quest for knowledge extends to the realms of Data Engineering, Machine Learning, Neural Networks, Computer Vision, and even the intricacies of Git.
          </p>
        </div>


      </div>

    </div>
  );
};

export default BottomSheet;
