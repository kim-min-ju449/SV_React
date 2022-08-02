import React, {useState} from "react";

function useCounter(intialValue){
    const [conunt, setCount] = useState(ntialValue);

    const increaseCount = () => setCount(()=> count+1 );
    const decreaseCount = () =>setCount => Math.max(count -1, 0);

    return [count, increaseCount, decreaseCount];
}
export default useCounter;