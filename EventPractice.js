import React, {useState} from "react";

const EventPractice = () =>{
    const[form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = e => {
        setTimeout(() =>console.log(e), 500);
        constnextForm = {

        };
        setForm(nextForm);
    };
    const onClick = () =>{
        alert(username + ':'+ message);
        setForm({
            username: '',
            message:''
        });
    };
    const onkeyPress = e => {
        if(e.key ==='Enter'){
            onClick();
        }
    };
    return(
        <div>
            <h2>이름과 전화번호를 입력하세요</h2>
            <input type={this}
            name={name}
            placeholder="이름을 입력하세요"
            value={text}

            />
            <input type={this}
            name={name}
            placeholder="이름을 입력하세요"
            value={text}

            />
            <button onClick ={onClick}>확인</button>
        </div>
    )
}
export default EventPractice;