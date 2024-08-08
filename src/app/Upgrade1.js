import React from 'react';
import './upgrade1.css';
import Link from 'next/link';

const Upgrade1 = () => {
    return (
        <div className="container">
            <div className="pricing-header">
                <h1 className="display-4">Wedding Packages</h1>
                <p className="lead">Compare our packages and choose the best one for your needs.</p>
            </div>

            <div className="row text-center">
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Silver</h4>
                            <h1 className="card-price">₹999</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li><span className="tick">✔</span>Profile access</li>
                                <li><span className="tick">✔</span>Detailed info</li>
                                <li><span className="tick">✔</span>Limited contacts</li>
                                <li><span className="tick">✔</span>Interest notifications</li>
                                <li><span className="tick">✔</span>Priority support</li>
                            </ul>
                            <Link href="/register" className="btn btn-silver">
                                Get Silver
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Gold</h4>
                            <h1 className="card-price">₹3,999</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li><span className="tick">✔</span>Profile access</li>
                                <li><span className="tick">✔</span>Detailed info</li>
                                <li><span className="tick">✔</span>More contacts</li>
                                <li><span className="tick">✔</span>Unlimited messaging</li>
                                <li><span className="tick">✔</span>Matching reports</li>
                            </ul>
                            <Link href="/register" className="btn btn-gold">
                                Get Gold
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Platinum</h4>
                            <h1 className="card-price">₹9,999</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li><span className="tick">✔</span>Profile access</li>
                                <li><span className="tick">✔</span>Detailed info</li>
                                <li><span className="tick">✔</span>Unlimited contacts</li>
                                <li><span className="tick">✔</span>Unlimited messaging</li>
                                <li><span className="tick">✔</span>Match assistance</li>
                            </ul>
                            <Link href="/register" className="btn btn-platinum">
                                Get Platinum
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upgrade1;
