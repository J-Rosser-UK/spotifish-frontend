import React from 'react';
import { Text, Card, Grid, Button, Spacer, Image, Input, Dot, Code } from '@geist-ui/react';
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {
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
        <Text h1>Sign Up</Text>
        <Text>Feel free to use a fake name, email & password to checkout all the features!</Text>
        <>
          <Input width='100%' style={{ color: 'white' }} >
            <Text h3>Name</Text>
          </Input>
          <Spacer />
          <Input width='100%' style={{ color: 'white' }} >
            <Text h3>Username</Text>
          </Input>
          <Spacer />
          <Input width='100%' style={{ color: 'white' }} >
            <Text h3>Email</Text>
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
              Sign Up
            </Button>
            <Text>or <span onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}><strong>Login</strong></span></Text>
          </div>
          <Spacer />
        </>
      </Card>      
      <Spacer y={1} />
    </div>
  );
}

export default SignUpScreen;
