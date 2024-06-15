import React from 'react'
 import "./upgrade.css";


const Upgrade = () => {
  return (
    
<div class="container" style={{maxwidth: "960px",
  margin: "auto",
  padding: "20px"
}}>
    <div class="pricing-header">
        <h1 class="display-4">Wedding Packages</h1>
        <p class="lead">Compare our packages and choose the best one for your needs.</p>
    </div>

    <div class="row text-center">
        <div class="col-md-3">
            <div class="card mb-4 shadow-sm" style={{backgroundColor:"#EEA47FFF"}}>
                <div class="card-body">
                    <h4 class="card-title">Free</h4>
                    <h1 class="card-price">₹0</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li><span class="tick">✔</span>Profile access</li>
                        <li><span class="tick">✔</span>Basic info</li>
                        <li><span class="tick">✔</span>Few profiles daily</li>
                        <li><span class="cross">✘</span>No messaging</li>
                        <li><span class="cross">✘</span>No contacts</li>

                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-primary">Sign Up for Free</button>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card mb-4 shadow-sm" style={{backgroundColor:"#EEA47FFF"}}>
                <div class="card-body">
                    <h4 class="card-title">Silver</h4>
                    <h1 class="card-price">₹999</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li><span class="tick">✔</span>Profile access</li>
                        <li><span class="tick">✔</span>Detailed info</li>
                        <li><span class="tick">✔</span>Limited contacts</li>
                        <li><span class="tick">✔</span>Interest notifications</li>
                        <li><span class="tick">✔</span>Priority support</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-primary">Get Silver</button>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card mb-4 shadow-sm"style={{backgroundColor:"#EEA47FFF"}}>
                <div class="card-body">
                    <h4 class="card-title">Gold</h4>
                    <h1 class="card-price">₹3,999</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li><span class="tick">✔</span>Profile access</li>
                        <li><span class="tick">✔</span>Detailed info</li>
                        <li><span class="tick">✔</span>More contacts</li>
                        <li><span class="tick">✔</span>Unlimited messaging</li>
                        <li><span class="tick">✔</span>Matching reports</li>
                       
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-primary">Get Gold</button>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card mb-4 shadow-sm" style={{backgroundColor:"#EEA47FFF"}}>
                <div class="card-body">
                    <h4 class="card-title">Platinum</h4>
                    <h1 class="card-price">₹9,999</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li><span class="tick">✔</span>Profile access</li>
                        <li><span class="tick">✔</span>Detailed info</li>
                        <li><span class="tick">✔</span>Unlimited contacts</li>
                        <li><span class="tick">✔</span>Unlimited messaging</li>
                        <li><span class="tick">✔</span>Match assistance</li>
                       
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-primary">Get Platinum</button>
                </div>
            </div>
        </div>
        
    </div>
</div>

  )
}

export default Upgrade
