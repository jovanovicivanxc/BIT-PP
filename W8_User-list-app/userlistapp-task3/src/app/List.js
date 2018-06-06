import React, { Component } from 'react';
import { dob, shorten, toUpperCase } from './Tools';
import mailImg from '../mail.png'
import birthdayImg from '../birthday.png'



const List = ({ user }) => (
    <div className="user-list" id={user.gender == "male" ? "male" : "female"}>
        <div className="pic">
            <img src={user.picture.thumbnail} className="pic" />
        </div>
        <div className="data">
            <p> {toUpperCase(user.name.first)} {toUpperCase(user.name.last)}</p>
            <img src={mailImg} className="mailButton" alt='button' />
            <span className="email"> email: {shorten(user.email)}</span>
            <br />
            <img src={birthdayImg} className="mailButton" alt='button' />
            <p> date of birth: {user.dob.slice(0, 10)}</p>
        </div>

    </div >)

export default List;