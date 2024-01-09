import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
    constructor(){
        super();
        this.state = {
            index:0
        }
    }

    render(){

        let{index} = this.state;    //destructuring
        let currentImage = images[index];

        let handlePrev = () => {
            this.setState({index:(this.state.index-1+images.length)% images.length})
        }

        let handleNext = () => {
            this.setState({index:(this.state.index+1)%images.length})
        }


        return(
            <>
            <div className="mainContainer">
                <div>
                <ArrowBackIosIcon onClick = {handlePrev} />
                </div>

                <div className="imageBox">
                    <img src={currentImage.img} alt="" />
                </div>

                <div className="imageContainer">
                    <div className="titleBox">
                        <p>{currentImage.title}</p>
                    </div>

                    <div className="subTitleBox">
                        <p>{currentImage.subtitle}</p>
                    </div>
                </div>

                <div>
                    <ArrowForwardIosIcon onClick = {handleNext} />
                </div>
            </div>
            </>
        )
    }
}

export default Carousel;