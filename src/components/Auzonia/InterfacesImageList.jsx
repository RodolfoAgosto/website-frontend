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
    img: '/assets/Auzonia/image1.webp',
    title: 'Bed',
  },
  {
    img: '/assets/Auzonia/image2.webp',
    title: 'Books',
  },
  {
    img: '/assets/Auzonia/image3.webp',
    title: 'Sink',
  },
  {
    img: '/assets/Auzonia/image4.webp',
    title: 'Kitchen',
  },
  {
    img: '/assets/Auzonia/image5.webp',
    title: 'Blinds',
  },
  {
    img: '/assets/Auzonia/image6.webp',
    title: 'Chairs',
  },
  {
    img: '/assets/Auzonia/image7.webp',
    title: 'Laptop',
  },
  {
    img: '/assets/Auzonia/image8.webp',
    title: 'Doors',
  },
  {
    img: '/assets/Auzonia/image9.webp',
    title: 'Coffee',
  },
  {
    img: '/assets/Auzonia/image10.webp',
    title: 'Storage',
  },
  {
    img: '/assets/Auzonia/image11.webp',
    title: 'Candle',
  },
  {
    img: '/assets/Auzonia/image12.webp',
    title: 'Coffee table',
  },
    {
    img: '/assets/Auzonia/image13.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image14.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image15.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image16.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image17.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image18.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image19.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image20.webp',
    title: 'Coffee table',
  },
    {
    img: '/assets/Auzonia/image21.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image22.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Auzonia/image23.webp',
    title: 'Coffee table',
  },

];

