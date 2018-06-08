import React from 'react';
import userImg from '../../user.jpg'

const SingleAuthorItem = (props) => {
  return (
    <div>
      <div>
        <img src={userImg} alt="image" />
        <h2 className="singleAuthorP"> {props.author.name}</h2>
        <p className="singleAuthorP"> username: {props.author.username}</p>
        <p className="singleAuthorP"> email: {props.author.email}</p>
        <p className="singleAuthorP"> phone: {props.author.phone}</p>
        <br />
        <br />
        <hr />
      </div>

      <div>
      <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5660.896104701138!2d${props.author.address.geo.lat}!3d${props.author.address.geo.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6552fc8a9dc7%3A0xdf92f5073d8e966b!2sSavamala%2C+Belgrade!5e0!3m2!1sen!2srs!4v1528453559847`} ></iframe>
        <h2 className="singleAuthorP2"> Address </h2>
        <p className="singleAuthorP2"> street: {props.author.address.street}</p>
        <p className="singleAuthorP2"> city: {props.author.address.city}</p>
        <p className="singleAuthorP2"> zipcode: {props.author.address.zipcode}</p>
        <hr />
      </div>

      <div>
        <h2 className="singleAuthorP2"> Company </h2>
        <p className="singleAuthorP2"> name: {props.author.company.name}</p>
        <p className="singleAuthorP2"> slogan: {props.author.company.catchPhrase}</p>
      </div>

    </div>
  )
}

export default SingleAuthorItem;  