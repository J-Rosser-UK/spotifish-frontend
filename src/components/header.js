import React, { useState, useEffect } from 'react';
import { Text, Button, Divider, Image } from '@geist-ui/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false); // Automatically close the menu when resizing to a larger view
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{
        
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Image src="/logo192.png" alt='spotifish logo' onClick={() => navigate('/')} style={{ height: '40px', margin: "0 10px 0 0", padding:"0 0 7px 0"}}/>
      <Text h4 onClick={() => navigate('/')}>Spotifish</Text>
      </div>
      {isMobile ? (
        <>
          <Button auto type="secondary" size="large" onClick={toggleMenu}>☰</Button>
          {menuOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: '60px', left: '20px', background: 'black', width: 'calc(100% - 40px)', zIndex: 10 }}>
            <Button auto type="secondary" color="green" size="large" onClick={() => navigate('/')}>Home</Button>
            <Button auto type="secondary" size="large" onClick={() => navigate('/search')}>Search</Button>
            <Button auto type="secondary" size="large" onClick={() => navigate('/me')}>Profile</Button>
            <Button auto type="success-light" size="large" onClick={() => navigate('/signup')}>Sign Up</Button>
            <Button auto type="secondary" size="large" onClick={() => navigate('/login')}>Login</Button>
            </div>
           
          )}
        </>
      ) : (
        <>
          <div>
            <Button auto type="secondary" color="green" size="large" style={{ margin: '0 5px 0 5px' }} onClick={() => navigate('/')}>Home</Button>
            <Button auto type="secondary" size="large" style={{ margin: '0 5px 0 5px' }} onClick={() => navigate('/search')}>Search</Button>
            <Button auto type="secondary" size="large" style={{ margin: '0 5px 0 5px' }} onClick={() => navigate('/me')}>Profile</Button>
          </div>
          <div>
            <Button auto type="success-light" size="large" style={{ margin: '0 5px 0 5px'}} onClick={() => navigate('/signup')}>Sign Up</Button>
            <Button auto type="secondary" size="large" style={{ margin: '0 5px 0 5px' }} onClick={() => navigate('/login')}>Login</Button>
          </div>
        </>
      )}
      
    </div>
    
  );
}

export default Header;
