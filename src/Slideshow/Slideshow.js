import "./Slideshow.css";
import bag1 from '../Inventory/bag1.jpeg';
import bag2 from '../Inventory/bag2.jpeg';
import bag3 from '../Inventory/bag3.jpeg';
import bag4 from '../Inventory/bag4.jpeg';
import bag5 from '../Inventory/bag5.jpeg';
import React, { useState, useEffect, useRef } from "react";

const items = [bag1, bag2, bag3, bag4, bag5];
const delay = 3000;
function Slideshow(){
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === items.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [index]);

    return(
        <div className="slideshow">
          <div className="slideshowHeader">
                <h2>More To See</h2>
          </div>
          <br/>
            <div className="slideshowSlider"
                 style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}      
            >
                {items.map((item, index) => {
                    return(<div className="slide" key={index}>
                            <img src = {item} alt = {item}/>
                          </div>);
                })}
            </div>

            <div className="slideshowDots">
                {items.map((_, idx) => (
                    <div 
                    key={idx} 
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                        setIndex(idx);
                      }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;