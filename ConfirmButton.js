import React, {useState} from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevlsConfirmed) => !prevIsConfirmed);
    }

    
        return(
            <div>
                <h1>출석 체크 하세요</h1>
                <button onClick={handleConfirm}
                disabled={isConfirmed}>
                {isConfirmed ? "확인됨" : "출석체크"}</button>
            </div>
        )
    }
export default ConfirmButton;