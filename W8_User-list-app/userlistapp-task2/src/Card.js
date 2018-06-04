import React, { Component } from 'react';
import { dob, shorten } from './Tools';


const Card = ({ user }) => (
    <div className="user card" key={i}>
        <img className="card-img-top" src={user.picture.large} alt="Card image cap" />
        <div className="card-body">
            <p className="card-text">email: {shorten(user.email)} </p>
            <p className="card-text">date of birth: {dob(user.dob)}  </p>
            <p className="name">{user.name.first}</p>
        </div>
    </div >)

export default Card;