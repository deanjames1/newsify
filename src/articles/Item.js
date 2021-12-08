import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Item = ({
  article: { title, description, urlToImage, url, publishedAt },
}) => {
  let dates = { publishedAt };
  let formattedDate = moment(dates).format("DD-MM-YYYY");
  return (
    <div className='container'>
      <div className='card text-center'>
        <a href={url}>
          <img
            className='round-img'
            src={urlToImage}
            style={{ width: "250px" }}
            alt=''
          />
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </a>
      </div>
      <p className='bottom-align'>Published: {formattedDate}</p>
    </div>
  );
};

Item.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Item;
