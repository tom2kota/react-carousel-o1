import React, {useState} from "react";
import Carousel from "react-simply-carousel";

export const App = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div>
            <Carousel
                containerProps={{
                    style: {
                        width: "100%",
                        // justifyContent: "space-between"
                    }
                }}
                activeSlideIndex={activeSlide}
                activeSlideProps={{
                    style: {
                        background: "orange"
                    }
                }}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                    children: ">",
                    style: {
                        width: 30,
                        height: 40,
                        minWidth: 30,
                        alignSelf: "center"
                    }
                }}
                backwardBtnProps={{
                    children: "<",
                    style: {
                        width: 30,
                        height: 40,
                        minWidth: 30,
                        alignSelf: "center"
                    }
                }}
                itemsToShow={5}
                speed={400}
            >
                {Array.from({length: 10}).map((item, index) => (
                    <div
                        style={{
                            color: "white",
                            background: "green",
                            width: 200,
                            height: 100,
                            border: "30px solid white",
                            textAlign: "center",
                            lineHeight: "40px",
                            boxSizing: "border-box"
                        }}
                        key={index}
                    >
                        {index}
                    </div>
                ))}
            </Carousel>
        </div>
    )
}