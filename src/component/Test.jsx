import React, { useState, useEffect, useRef } from 'react';


const Testimonial = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNext();
        }, 5000); // Auto slide every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [testimonials.length]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    if (!testimonials || testimonials.length === 0) {
        return <div>No testimonials available.</div>;
    }

    return (
        <div className="testimonial-container">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-slider-wrapper">
                <div className="testimonial-slider" ref={sliderRef}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-slide">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                            <div className="testimonial-content">
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <h3 className="testimonial-name">{testimonial.name}</h3>
                                <p className="testimonial-profession">{testimonial.profession}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="slider-button prev" onClick={goToPrevious}>
                    &lt;
                </button>
                <button className="slider-button next" onClick={goToNext}>
                    &gt;
                </button>
            </div>
            <div className="slider-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

// Example usage with data:
const App = () => {
    const testimonialData = [
        {
            name: 'Aarav Sharma',
            profession: 'Client',
            text: 'The service was excellent and the team was very supportive. I highly recommend them!',
            image: 'img/testimonial-1.jpg',
        },
        {
            name: 'Priya Verma',
            profession: 'Client',
            text: 'Incredible results! Their expertise helped us achieve our business goals faster than expected.',
            image: 'img/testimonial-2.jpg',
        },
        {
            name: 'Rahul Kapoor',
            profession: 'Client',
            text: 'I am very satisfied with their professionalism and the quality of their work. A great partner to have.',
            image: 'img/testimonial-3.jpg',
        },
        {
            name: 'Sneha Patel',
            profession: 'Client',
            text: 'Their creative approach and attention to detail are commendable. They truly understand their clients needs.',
            image: 'img/testimonial-4.jpg',
        },
    ];

    return (
        <div>
            <Testimonial testimonials={testimonialData} />
        </div>
    );
};

export default App;