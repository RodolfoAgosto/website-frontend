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
    img: '/assets/Anavi/image1.png',
    title: 'Bed',
  },
  {
    img: '/assets/Anavi/image2.png',
    title: 'Books',
  },
  {
    img: '/assets/Anavi/image3.png',
    title: 'Sink',
  },
  {
    img: '/assets/Anavi/image4.png',
    title: 'Kitchen',
  },
  {
    img: '/assets/Anavi/image5.png',
    title: 'Blinds',
  },
  {
    img: '/assets/Anavi/image6.png',
    title: 'Chairs',
  },
  {
    img: '/assets/Anavi/image7.png',
    title: 'Laptop',
  },
  {
    img: '/assets/Anavi/image8.png',
    title: 'Doors',
  },
  {
    img: '/assets/Anavi/image9.png',
    title: 'Coffee',
  },
  {
    img: '/assets/Anavi/image10.png',
    title: 'Storage',
  },
  {
    img: '/assets/Anavi/image11.png',
    title: 'Candle',
  },
  {
    img: '/assets/Anavi/image12.png',
    title: 'Coffee table',
  },
    {
    img: '/assets/Anavi/image13.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image14.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image15.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image16.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image17.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image18.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image19.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image20.png',
    title: 'Coffee table',
  },
    {
    img: '/assets/Anavi/image21.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image22.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image23.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image24.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image24.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image25.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image26.png',
    title: 'Coffee table',
  },
    {
    img: '/assets/Anavi/image27.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image28.png',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image29.png',
    title: 'Coffee table',
  },

];

