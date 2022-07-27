import React from "react";
class StateExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            fromData:'no data'
        };
        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData, 4000);
    }
    handleData(){
        const data = 'new data';
        const{fromData} = this.state;
        this.setState({
            loading:false,
            formData: data + fromData,
        });
        console.log("loading값", this.state.loading);

    }
    render(){
        return(
            <div>
                <h1> 아래의 로딩 결과를 나타나는 화면입니다</h1>
                <span>로딩중{String(this.state.loading)}</span>
                <span>결과{this.state.fromData}</span>
            </div>
        );
    }
}
export default StateExample;