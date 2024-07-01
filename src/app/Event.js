import React from 'react'
import Help from './Help'
import Footer from './Footer'

const Event = () => {
  return (
    <div>
      <div className="container about-us">
      <div className="row">
        <div className="col-md-6 about-us-description">
          <div>
            <h2>Wedding Events Services</h2>
            <p>
            Weddings in India are renowned for their extensive preparations and bustling activities. Families often
invest months in meticulously organizing the various ceremonies that constitute a wedding event.
These celebrations can span around a week, presenting a significant organizational challenge,
particularly if there is limited additional assistance available. This is the precise scenario where we
consider it our duty to step in and offer our support.          </p>
            <p>
            Our dedicated team is committed to turning your vision into reality, ensuring that every detail is
            meticulously planned and flawlessly executed.           </p> 
            
       <h2>Our Range of Services:</h2>
       
      <p> 1. Wedding Planning: Our experienced planners work closely with you to understand your
preferences and design a comprehensive wedding plan. From venue selection to theme
conceptualization, we take care of every aspect to create a seamless and memorable
experience.</p>
<p>2. Decor and Design: Our creative designers breathe life into your vision, crafting enchanting
decor that resonates with your chosen theme. From elegant floral arrangements to
captivating lighting setups, we ensure that your chosen ambiance is brought to life.</p>
<p>3. Logistics Management: Our team takes care of all logistical aspects, including transportation,
accommodations, and guest management. We ensure that your guests have a comfortable
and hassle-free experience from start to finish.</p>
<p>4. Vendor Coordination: We collaborate with a network of trusted vendors to ensure that every
service, from catering to entertainment, aligns perfectly with your preferences and
requirements.</p>
<p>5. Entertainment: From live music and DJs to captivating performances, we curate
entertainment that adds excitement and vibrancy to your celebration.</p>
<p>6. Photography and Videography: Our skilled photographers and videographers capture every
heartfelt moment, allowing you to relive your special day for years to come.</p>
<p>7. Wedding Video Streaming: Connect with loved ones worldwide in real time, ensuring no one
misses out on your special day. Enjoy inclusive access, professional production, interactive
features, and the option to record for later viewing. Let us bring your wedding closer to
everyone who matters.</p>
<p>8. Catering: Delight your guests with a culinary experience tailored to their tastes. Our catering
partners offer a range of delectable options that suit your chosen theme and preferences.</p>
<p>9. Coordination on the Day: Sit back and enjoy your day as our expert team ensures that every
aspect of your wedding unfolds seamlessly. We manage the schedule, oversee setups, and
handle any unexpected situations that may arise.</p>
<p>10. Destination Weddings: We specialize in crafting destination weddings that combine
breathtaking locations with flawless execution. Whether it's a serene beach, a historic castle,
or a charming vineyard, we bring your dream destination wedding to life.</p>
<p>11. Personalized Touch: Your wedding is a reflection of your love story. Our team goes the extra
mile to infuse personal touches that make your celebration uniquely yours.</p>

 </div>
        </div>
        <div className="col-md-6">
          <img src="Images/Events.jpeg" alt="About Us Image" style={{height:"250px",width:"400px"}} />
        </div>
      </div>
    </div>
    <div>
      <h2 style={{textAlign:"center"}}>For More Details ContactUs</h2>
      <Help/>
      <Footer/>
    </div>
    </div>
  )
}

export default Event
