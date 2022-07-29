import React from "react";

const students = [
    {
        name: "Inje",
    }, 
    {
        name:"Steve",
    },
    {
        name:"Bill",
    },
    {
        name:"Jeft",
    },
];
function AttendanceBook(props){
    return(
        <ul>
            {students.map((student =>{
                return {student.name}</li>;
            }))}
        </ul>
    );
}
export default AttendanceBook;