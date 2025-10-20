import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function InterfacesImageList() {
  return (
    <Box sx={{ width: 550, height: 500, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/assets/Auzonia/image1.png',
    title: 'Bed',
  },
  {
    img: '/assets/Auzonia/image2.png',
    title: 'Books',
  },
  {
    img: '/assets/Auzonia/image3.png',
    title: 'Sink',
  },
  {
    img: '/assets/Auzonia/image4.png',
    title: 'Kitchen',
  },
  {
    img: '/assets/Auzonia/image5.png',
    title: 'Blinds',
  },
  {
    img: '/assets/Auzonia/image6.png',
    title: 'Chairs',
  },
  {
    img: '/assets/Auzonia/image7.png',
    title: 'Laptop',
  },
  {
    img: '/assets/Auzonia/image8.png',
    title: 'Doors',
  },
  {
    img: '/assets/Auzonia/image9.png',
    title: 'Coffee',
  },
  {
    img: '/assets/Auzonia/image10.png',
    title: 'Storage',
  },
  {
    img: '/assets/Auzonia/image11.png',
    title: 'Candle',
  },
  {
    img: '/assets/Auzonia/image12.png',
    title: 'Coffee table',
  },
    {
    img: '/assets/Auzonia/image13.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image14.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image15.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image16.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image17.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image18.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image19.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image20.png',
    title: 'Coffee table',
  },
    {
    img: '/assets/Auzonia/image21.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image22.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image23.png',
    title: 'Coffee table',
  },

];

