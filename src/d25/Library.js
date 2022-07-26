import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="fsdfsdf" numOfPage="24"/>
            <Book name="react" numOfPage="350"/>
            <Book name="node.js" numOfPage="280"/>
        </div>
    )
}
export default Library;