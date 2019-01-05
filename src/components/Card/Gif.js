import React from 'react';

const Gif = ({imgUrl, card, id, index, onClick}) => {

    return (
        <img 
            id={id} 
            onClick={() => onClick(index)} 
            className={`img-thumbnail ${card}`} 
            src={imgUrl} 
            alt="Thumbnail" 
            style={ {width: '225px', height: '225px'} }/>
    );
}

export default Gif;