import React from "react";
import "./App.css"; 

const App = () => {
  const handleListenClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <header className="header">
        <h1>LUGI (루기)</h1>
      </header>

      <main className="main-content">
        <div className="photo-section">
          
          <img
            src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/029/27/798/2927798_20210322162631_500.jpg?e7443c8cf76771e8c155c4027d033cb9/melon/resize/416/quality/80/optimize"
            alt="LUGI"
            className="artist-photo"
          />
        </div>
        <div className="info-section">
          <h2>LUGI</h2>
          <ul className="song-list">
            <li>
              all night party
              <button 
                className="listen-button"
                onClick={() => handleListenClick("https://www.youtube.com/watch?v=djh88m1xic0")}
              >
                노래 듣기
              </button>
            </li>
            <li>
              HURT
              <button 
                className="listen-button"
                onClick={() => handleListenClick("https://www.youtube.com/watch?v=dXlHGRU2RDA")}
              >
                노래 듣기
              </button>
            </li>
            <li>
              나만의 우주
              <button 
                className="listen-button"
                onClick={() => handleListenClick("https://www.youtube.com/watch?v=7ML7U-Y2wYY")}
              >
                노래 듣기
              </button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
