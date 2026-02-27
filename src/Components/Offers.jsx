import { useState } from "react";
import "../App.css";

const offers = [
  {
    id: 1,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=73.61",
    title: "2 PC hot & Crispi Chicken",
    min: 499,
    text: "₹99 on 2nd & 3rd order",
  },
  {
    id: 2,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=73.61",
    title: "Upto ₹100 Off",
    min: 699,
    text: "₹100 OFF",
  },
  {
    id: 3,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/PHP75.jpg?ver=73.61",
    title: "₹75 Off",
    min: 599,
    text: "₹75 OFF",
  },
  {
    id: 4,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/FREEROLL.jpg?ver=73.61",
    title: "Free Double Chicken Roll",
    min: 999,
    text: "Free Roll",
  },
];

export default function Offers() {
  const [applied, setApplied] = useState(null);

  return (
    <>
      {/* Ticket Section */}
      <div className="ticket">
        <h2>Save More as you order</h2>

        <div className="offers-row">
          {offers.map((offer) => (
            <div className="offer-card" key={offer.id}>
              <img src={offer.img} alt={offer.title} />

              <h4>{offer.title}</h4>
              <p>Min. order value ₹{offer.min}</p>
              <p className="view">View Details</p>

              <button
                className="apply-offer-btn"
                onClick={() => setApplied(offer.text)}
              >
                Apply Offers
              </button>
            </div>
          ))}
        </div>

        {/* Applied Offer Banner */}
        {applied && (
          <div className="offer-banner">
            🎉 Offer Applied: {applied}
            <span onClick={() => setApplied(null)}>✖</span>
          </div>
        )}
      </div>
    </>
  );
}
