import React from "react";
import './Card.css'
export default function Card({
  imgSrc,
  specialization,
  doctorName,
  description,
  available,
  rating,
  experience,
  color
}) {
  return (
    <div className="card">
      <div className="card__header">
        <img src={imgSrc} alt="sample1" />
      </div>
      <div className="card__body">
        <span style={{ color: color }} className="card__body__date">
          {specialization}
        </span>
        <h1 className="card__body__head">{doctorName}</h1>
        <p className="card__body__content">{description}</p>
      </div>
      <div style={{ backgroundColor: color }} className="card__footer">
        <div className="card__Footer__first">
          <div>
            <p>{rating}</p>
          </div>
          <label>Rating</label>
        </div>
        <div className="card__Footer__second">
          <div>
            <p>{available}</p>
          </div>
          <label>Available</label>
        </div>
        <div className="card__Footer__third">
          <div>
            <p>{experience}yr.</p>
          </div>
          <label>Experience</label>
        </div>
      </div>
    </div>
  );
}
