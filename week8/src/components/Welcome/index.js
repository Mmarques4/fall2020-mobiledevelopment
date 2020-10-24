import React from 'react';

const myDate = (props) => {

    let myDate = new Date();
    let hrs = myDate.getHours();

    let greet;

    if (hrs < 12) {
        greet = 'Good Morning';
    } else if (hrs >= 12 && hrs <= 17) {
        greet = 'Good Afternoon';
    } else if (hrs >= 17 && hrs <= 24) {
        greet = 'Good Evening';
    }

    greet = greet + " and Welcome to these Friendly Trackers!";

    return(
        <p id="lblGreetings"><b>{greet}</b></p>
        );
};

export default myDate;