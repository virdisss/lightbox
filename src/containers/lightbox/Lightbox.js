import React, { Component, Fragment } from 'react';
import Gallery from '../../components/gallery/Gallery';
import Slidebox from '../../components/slideshow/Slideshow';
import './Lightbox.scss';

class Lightbox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gif: props.gifs[0]
        }
        this.slideIndex = 1;
        this.selectByArrow();
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.slideIndex = this.middleIndex();
        this.showSlides(this.slideIndex-1);
    }

    middleIndex() {
        const middle = (this.props.gifs.length % 2 === 0) ? Math.floor(this.props.gifs.length/2) : Math.floor(this.props.gifs.length/2) + 1;
        return middle;
    }

    openModal(n) {
        document.getElementById('myModal').style.display = "block";
        this.slideIndex = n + 1;
        this.showSlides(this.slideIndex-1);
    }

    closeModal() {
        document.getElementById('myModal').style.display = "none";
    }

    previous() {
        if (this.slideIndex > 1) {
            this.slideIndex--;
            this.showSlides(this.slideIndex-1);
        }
    }

    next() {
        if (this.slideIndex < this.props.gifs.length) {
            this.slideIndex++;
            this.showSlides(this.slideIndex-1);
        }
    }

    selectByArrow() {
        document.addEventListener('keyup', (e) => {
            let newIndex = this.state.gif.index;
            const {gifs} = this.props;
            if (e.key === 'ArrowLeft' && newIndex > 0) {
                newIndex = this.state.gif.index - 1;
            } else if (e.key === 'ArrowRight' && newIndex < gifs.length-1) {
                newIndex = this.state.gif.index + 1;
            }
            //Here we send a request to the api to fetch more data.
            // if (e.key === 'ArrowRight' && newIndex === gifs.length-1) {
            //     this.props.filter();
            // }
            this.slideIndex = newIndex;
            this.setState({ gif: gifs[newIndex] })
        });
    }

    showSlides(newIndex) {
        this.setState({gif: this.props.gifs[newIndex]})
    }

    render() {

        const {gifs} = this.props;
    
        return (
            <Fragment>
                <Gallery 
                    gifs={gifs} 
                    selected={this.state.gif}
                    length={gifs.length}
                    onClick={this.openModal}/>

                <Slidebox 
                    closeModal = {this.closeModal} 
                    selected = {this.state.gif} 
                    previous = {this.previous}
                    next = {this.next} 
                    index = {this.slideIndex} 
                    length = {gifs.length} />
            </Fragment>
        );
    }
}

export default Lightbox;