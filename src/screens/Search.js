import React from 'react';
import { Text, Card, Grid, Spacer, Image, Input, Divider } from '@geist-ui/react';

function SearchScreen() {
  // Assuming you have arrays of data for top and bottom cards
  // Example data for the top smaller cards
const topCardsData = [
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg/800px-Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg',
      title: 'Your Top Songs 2023',
      description: 'A summary of your most played songs in 2023.'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/The_Monster_Ball_-_Poker_Face_revamped2_cropped.jpg/1024px-The_Monster_Ball_-_Poker_Face_revamped2_cropped.jpg',
      title: 'Your Episodes',
      description: 'Your podcast episodes at a glance.'
    },
    {
      imageUrl: '/path-to-your-image/top3.jpg',
      title: 'Liked Songs',
      description: 'Browse your favorite tracks.'
    },
    {
      imageUrl: '/path-to-your-image/top4.jpg',
      title: 'Discover Weekly',
      description: 'New music tailored for you every week.'
    },
    {
      imageUrl: '/path-to-your-image/top5.jpg',
      title: 'On Repeat',
      description: 'Songs you can’t stop playing.'
    },
    {
      imageUrl: '/path-to-your-image/top6.jpg',
      title: 'Betty Kangers',
      description: 'The latest album from Betty Kangers.'
    }
  ];

  const [value, setValue] = React.useState()
  const handler = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
  }
  
  
  
  return (
    <div style={{ padding: '20px' }}>
        
      <Text h1>Search</Text>
      <Spacer y={1} />
      <Input value={value} onChange={handler} scale={4/3} placeholder="Lady Gaga" width="70%" justify="center" style={{ color: 'white' }} />
      <Spacer y={1} />
      <Divider />
      <Spacer y={1} />
      
      <Grid.Container gap={2} justify="left">
        {topCardsData.map((card, index) => (
          <Grid xs={24} sm={12} md={6} lg={3} key={index}>
            <Card type="dark" hoverable style={{minWidth: '100%', hoverable: true}}>
              
                <Image src={card.imageUrl} alt={card.title} style={{ float: 'left', marginRight: '10px', width: '100%', minWidth: '100%' }} />
                <Text>{card.title}</Text>
                <Text small>{card.description}</Text>
              
            </Card>
          </Grid>
        ))}
      </Grid.Container>

      <Spacer y={1} />

      
    </div>
  );
}

export default SearchScreen;
