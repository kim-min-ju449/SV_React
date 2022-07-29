import React from "react";

const style = {
    wrapper:{
        padding:16,
        display:"flex",
        flexDirection:"row",
        borderBottom: "1px solid grey"
    },
    greeting:{
        marginRight:8,
    },
};

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: "",
          button:"로그인"
        };
      }
      changeText = () => {
        this.setState({
          text: "즐거운 시간되세요",
          button:"로그아웃"
        });
      };
    render()  {
        return (
          <div style={style.wraaper}>
            <p style={style.greeting}>{this.state.text}</p>
            <button onClick={this.changeText}>{this.state.button}</button>
            <h3>환상의 나라 리액트로</h3>
          </div>
        );
      }
  }
  export default Toolbar;
