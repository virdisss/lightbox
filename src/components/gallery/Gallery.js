import React from 'react';
import Gif from '../Card/Gif';
import './Gallery.scss';

const Gallery = ({ gifs, selected, length, onClick }) => {

    return (

        <div className={`card-slider mt-5 active-slide-${selected.index}`}>
            <div className="card-slider-wrapper" style={{
                'transform': `translateX(-${selected.index * (100 / length)}%)`
            }}>
                {gifs.map((gif) => <Gif 
                                    key={gif.index} 
                                    imgUrl={gif.url} 
                                    card="card" 
                                    id={`card-${gif.index}`} 
                                    index = {gif.index}
                                    onClick={onClick}/>)}
            </div>
        </div>
    );
}

export default Gallery;