import React, { useState } from 'react';
import { Text, Card, Grid, User, Spacer, Button, Divider } from '@geist-ui/react';
// import User from '../components/user';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WhiteTextUser = styled(User)`
  color: white !important;
  * {
    color: white !important;
  }
`;
// Main Profile component
const ProfileScreen = () => {


  // Example user data
  const profile = {
    profile_handle: 'user123',
    profile_name: 'John Doe',
    profile_description: 'Lorem ipsum dolor sit amet...',
    profile_picture: 'https://akns-images.eonline.com/eol_images/Entire_Site/2023125/rs_1200x1200-230225134052-1200-lady-gaga.ct.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top', // Insert valid URL for the profile picture
    profile_followers_counter: 123,
    profile_following_counter: 456
  };

  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener('resize', handleResize);

  return (
    <div style={{ padding: '20px'}}>
      <div style={{
        height: isMobile ? 'auto' : '100px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: isMobile ? 'flex-start' : 'space-between',
        padding: '20px',
      }}>
        <div style={{transform: 'scale(3)', margin: isMobile ? "0" : "0 0 0 90px"}}>
          <WhiteTextUser src={profile.profile_picture} name={profile.profile_name} theme="dark" style={{color: "white"}}>
            <User.Link href={`https://twitter.com/${profile.profile_handle}`} style={{ color: 'white' }}>@{profile.profile_handle}</User.Link>
          </WhiteTextUser>
        </div>
        {isMobile && <Spacer/> }
        {isMobile && <Spacer/> }
        {isMobile && <Spacer/> }
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '1.5em'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px'}}>
            <div>Followers</div>
            <div>{profile.profile_followers_counter}</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>Following</div>
            <div>{profile.profile_following_counter}</div>
          </div>
        </div>
      </div>
      <Text>{profile.profile_description}</Text>
      <Divider/>
    </div>
  );
};

export default ProfileScreen;