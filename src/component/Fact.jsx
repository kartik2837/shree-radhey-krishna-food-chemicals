import React from 'react'

const Fact = () => {
    return (
        <div className="fact">
            <div className="container-fluid">
                <div className="row counters">
                    <div className="col-md-6 fact-left wow slideInLeft">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="flaticon-worker"></i>
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">1000</h2>
                                    <p>Expert Workers</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="flaticon-building"></i>
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">10000</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 fact-right wow slideInRight">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="flaticon-address"></i>
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">20000</h2>
                                    <p>Completed Product</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="flaticon-crane"></i>
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">50000</h2>
                                    <p>Running Product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fact
