import React from 'react';
import {Link} from 'react-router-dom';

function ArticleItem(props){
    return(
        <>
            <li className="article__item">
                <Link className="article__container_link" to={props.path}>
                    <figure className="article__item_pic_wrap" data-category={props.label}>
                        <img src={props.src} alt="Article img" className='article_item_img'/>
                    </figure>
                    <div className="article__item__info">
                        <h5 className='article__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default ArticleItem;
