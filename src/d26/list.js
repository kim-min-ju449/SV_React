import React from "react";
import ReactDOM from 'react-dom';

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16
    },
    imageContainer: {},
    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
    },
    contentContainer: {
        margin: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        margin: 10
    },
    commentText: {
        color: "black",
        fontSize: 16,
        margin: 10
    },
}

function List(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer} />
            <img src={props.image} style={styles.image} />
            <div>
                <div style={styles.nameText}>{props.name}</div>
                <br></br>
                <div style={styles.commentText}>{props.comment}</div>
            </div>
        </div>
    )
}


export default List;