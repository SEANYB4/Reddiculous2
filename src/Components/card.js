import './card.css';
import React, { useState } from 'react';




  

const Card = (props) => {
   

    return (
        <article>

            <a href={"https://reddit.com" + props.article.permalink} target="_blank">
                <h3>{props.article.title}</h3>
               <img src={props.article.thumbnail} alt="" />
            </a>
        </article>




    );
}


export default Card;

