import React, {useState} from "react";
import Carousel from "react-simply-carousel";

export const App = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const containerProps = {
        style: {
            width: "100%",
            border: "1px solid lightgray",
            boxShadow: "1px 2px 2px lightblue",
            // justifyContent: "space-between"
        }
    }
    const activeSlideProps = {
        style: {
            background: "orange"
        }
    }
    const forwardBtnProps = {
        children: ">",
        style: {
            width: 30,
            height: 40,
            minWidth: 30,
            alignSelf: "center"
        }
    }
    const backwardBtnProp = {
        children: "<",
        style: {
            width: 30,
            height: 40,
            minWidth: 30,
            alignSelf: "center"
        }
    }
    const itemsToShow = 5
    const speed = 400
    const carouselStyle = {
        color: "white",
        background: "green",
        width: 200,
        height: 100,
        border: "30px solid white",
        textAlign: "center",
        lineHeight: "40px",
        boxSizing: "border-box"
    }

    return (
        <div>
            <Carousel
                containerProps={containerProps}
                activeSlideIndex={activeSlide}
                activeSlideProps={activeSlideProps}
                onRequestChange={setActiveSlide}
                forwardBtnProps={forwardBtnProps}
                backwardBtnProps={backwardBtnProp}
                itemsToShow={itemsToShow}
                speed={speed}
            >
                {Array.from({length: 10}).map((item, index) => (
                    <div style={carouselStyle} key={index}>
                        {index}
                    </div>
                ))}
            </Carousel>
        </div>
    )
}