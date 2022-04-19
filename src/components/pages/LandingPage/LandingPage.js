import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.styles.scss";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

  function info() {
    Modal.info({
      title: 'HELP',
      content: (
        <div>
            <ul>
                <li><p style={{ fontFamily:"sans-serif" }}>Type the given text in the text area.</p></li>
                <li><p style={{ fontFamily:"sans-serif" }}>Every correct word typed gives you 1 point.</p></li>
                <li><p style={{ fontFamily:"sans-serif" }}>If you make any mistake the box gets highlighted with red color indicating you need to fix it.</p></li>
                <li><p style={{ fontFamily:"sans-serif" }}>There is a timer at the bottom of the textbox having a time limit of 1 minute.</p></li>
                <li><p style={{ fontFamily:"sans-serif" }}>You can restart the game using the restart button.</p></li>
                <li><p style={{ fontFamily:"sans-serif" }}>Try to score maximum points and share with your friends.</p></li>
            </ul>
          {/* <p>some messages...some messages...</p>
          <p>some messages...some messages...</p> */}
        </div>
      ),
      onOk() {},
    });
  }

const LandingPage = () => {
    return (
        <div className="landing-page-wrapper">
            <div className="game-information-container">
                <QuestionCircleOutlined onClick={info} style={{color:"white", fontSize:"35px", position:"absolute", right:"10px", top:"10px"}} />
                <h1>Welcome to Typing Game</h1>
                <p style={{color:"white", marginBottom:"20px"}}>Try to type maximum number of words in 1 minute </p>
                <Link className="game-information-container-link" to="/game">
                    <button className="play-button">PLAY</button>
                </Link>
            </div>
            <footer>
                <p style={{position:"absolute", color:"white", bottom:"12px", right:"20px", fontFamily:"sans-serif"}}>Created by Ashank Priyadarshi</p>
            </footer>
        </div>
    );
};

export default LandingPage;
