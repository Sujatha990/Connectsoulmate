"use client";
import Link from 'next/link';

const NavBar2 = () => {

  const handleUpgradeClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    alert('Please register');
    // Navigate after a short delay to allow the alert to be visible
    setTimeout(() => {
        window.location.href = '/upgradereg1';
    }, 100); // Delay of 100ms
};

  return (
    <div>
      <ul className="nav justify-content-center pt-2 pb-2 bg-secondary text-white" style={{ fontSize: '20px' }}>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/about">
            <i className="fas fa-info-circle"></i> About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/service">
            <i className="fas fa-concierge-bell"></i> Service
          </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" href="/upgrade" onClick={handleUpgradeClick}>
              <i className="fas fa-arrow-up"></i> Upgrade
            </Link>
            
          
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/sucessstories">
            <i className="fas fa-star"></i> Success Stories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar2;
