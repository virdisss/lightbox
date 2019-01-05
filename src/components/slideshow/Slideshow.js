import React from 'react';
import './Slideshow.scss';

const Slidebox = ({closeModal, selected, previous, next, index, length}) => {
    return (
        <div id="myModal" className="modal">
            <span className="close cursor" onClick={closeModal}>&times;</span>
            <div className="modal-content">

                <div className="mySlides">
                    <img src={selected.url} alt="something meaningfull" style={{ width: "100%", height: "500px" }} />
                </div>

                { (index > 1) && <button className="prev btn btn-link" onClick={previous}>&#10094;</button> }
                { (index < length) && <button className="next btn btn-link" onClick={next}>&#10095;</button> }
            </div>
        </div>
    );
}

export default Slidebox;