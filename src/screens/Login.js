import React from 'react';
import { Text, Card, Grid, Button, Spacer, Image, Input, Dot, Code } from '@geist-ui/react';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
    const navigate = useNavigate()

  return (
    <div 
      style={{ 
        padding: '20px', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Card 
        type="dark" 
        hoverable 
        style={{ 
          width: '600px', 
          maxWidth: '100%' 
        }}
      >
        <Image 
          src="/logo512.png" 
          alt='spotifish logo' 
          style={{ 
            height: '100px', 
            margin: "0 10px 0 0", 
            padding:"0 0 7px 0"
          }}
        />
        <Text h1>Login</Text>
        
        <>
        
          <Input width='100%' style={{ color: 'white' }} >
            <Text h3>Username or Email</Text>
          </Input>
          <Spacer />
          <Input.Password width='100%' style={{ color: 'white' }} >
            <Text h3>Password</Text>
          </Input.Password>
          <Spacer />
          <Spacer />
          <div 
            style={{ 
              display: "flex", 
              alignItems: "center"
            }}
          >
            <Button 
              auto 
              type="success" 
              size="large" 
              style={{ 
                margin: "0 10px 0 0 "
              }}
            >
              Login
            </Button>
            <Text>or <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}><strong>Sign Up</strong></span></Text>
          </div>
          <Spacer />
        </>
      </Card>      
      <Spacer y={1} />
    </div>
  );
}

export default LoginScreen;
