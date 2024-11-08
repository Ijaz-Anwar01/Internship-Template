import news from '../../../assets/newsbtn.png';
import './Newsletter.css';
import { useMediaQuery } from 'react-responsive';

const Newsletter = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className='newsletter '  >
      <h1 className={isMobile ? 'mobile-title' : 'desktop-title'}>Join Our News Letters</h1>
      <p className={isMobile ? 'mobile-paragraph' : 'desktop-paragraph'}>
        Leverage agile frameworks to provide a robust synopsis for high-level overviews. <br />
        Iterative approaches to corporate strategy foster
      </p>

      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder='Input your mail here'
            className='input-field'
          />
          <img
            src={news}
            alt="icon"
            className='news-icon'
          />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
