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
    img: '/assets/Anavi/image1.webp',
    title: 'Bed',
  },
  {
    img: '/assets/Anavi/image2.webp',
    title: 'Books',
  },
  {
    img: '/assets/Anavi/image3.webp',
    title: 'Sink',
  },
  {
    img: '/assets/Anavi/image4.webp',
    title: 'Kitchen',
  },
  {
    img: '/assets/Anavi/image5.webp',
    title: 'Blinds',
  },
  {
    img: '/assets/Anavi/image6.webp',
    title: 'Chairs',
  },
  {
    img: '/assets/Anavi/image7.webp',
    title: 'Laptop',
  },
  {
    img: '/assets/Anavi/image8.webp',
    title: 'Doors',
  },
  {
    img: '/assets/Anavi/image9.webp',
    title: 'Coffee',
  },
  {
    img: '/assets/Anavi/image10.webp',
    title: 'Storage',
  },
  {
    img: '/assets/Anavi/image11.webp',
    title: 'Candle',
  },
  {
    img: '/assets/Anavi/image12.webp',
    title: 'Coffee table',
  },
    {
    img: '/assets/Anavi/image13.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image14.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image15.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image16.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image17.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image18.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image19.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image20.webp',
    title: 'Coffee table',
  },
    {
    img: '/assets/Anavi/image21.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image22.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image23.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image24.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image24.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image25.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image26.webp',
    title: 'Coffee table',
  },
    {
    img: '/assets/Anavi/image27.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image28.webp',
    title: 'Coffee table',
  },
  {
    img: '/assets/Anavi/image29.webp',
    title: 'Coffee table',
  },

];

