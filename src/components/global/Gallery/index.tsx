// 'use client'
// import {
//   AspectRatio,
//   GridItem,
//   Image,
//   Grid,
//   Text,
//   Button,
// } from '@chakra-ui/react';

// const Gallery = () => {
//   const newImages = [
//     "https://images.unsplash.com/photo-1733506260573-2ddbf1db9b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1726137569825-7535962addcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1739046092220-a7c903a7b741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1739932215472-15ebf0ab6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   const first = newImages[0];
//   const nextTwo = [newImages[1], newImages[2]];

//   return (
//     <Grid
//       templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }}
//       templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' }} // Reduz altura
//       gap={2} // Diminui espaçamento
//     >
//       <GridItem colSpan={2} rowSpan={2}>
//         <AspectRatio ratio={16 / 9}>
//           <Image
//             objectFit="cover"
//             rounded={{ base: 'lg', md: 'xl' }}
//             src={first}
//             alt="Gallery Image"
//           />
//         </AspectRatio>
//       </GridItem>

//       {nextTwo.map((image) => (
//         <GridItem key={image} colSpan={1} rowSpan={1}>
//           <AspectRatio ratio={16 / 9}>
//             <Image
//               rounded={{ base: 'lg', md: 'xl' }}
//               src={image}
//               alt="Gallery Image"
//             />
//           </AspectRatio>
//         </GridItem>
//       ))}

//       {/* <GridItem colSpan={1} rowSpan={1}>
//         <AspectRatio ratio={4 / 3}>
//           <Button
//             alignItems="center"
//             justifyContent="center"
//             rounded={{ base: 'lg', md: 'xl' }}
//             bg="gray.100"
//           >
//             <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.500">
//               View {newImages.length - 3}+ photos
//             </Text>
//           </Button>
//         </AspectRatio>
//       </GridItem> */}
//     </Grid>
//   );
// };

// export default Gallery;



// 'use client'
// import {
//   AspectRatio,
//   GridItem,
//   Image,
//   Grid,
//   Text,
//   Button,
// } from '@chakra-ui/react';

// const Gallery = () => {
//   const newImages = [
//     "https://images.unsplash.com/photo-1733506260573-2ddbf1db9b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1726137569825-7535962addcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1739046092220-a7c903a7b741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1739932215472-15ebf0ab6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   const first = newImages[0];
//   const nextTwo = [newImages[1], newImages[2]];

//   return (
//     <Grid
//       templateAreas={{
//         base: `"main main main"
//                "small1 small2 small3"`,
//         md: `"main main small1"
//              "main main small2"`,
//       }}
//       templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }}
//       templateRows={{ base: 'auto auto', md: 'repeat(2, 1fr)' }}
//       gap={2}
//     >
//       {/* Imagem Principal */}
//       <GridItem area="main">
//         <AspectRatio ratio={4 / 3}>
//           <Image
//             objectFit="cover"
//             rounded={{ base: 'lg', md: 'xl' }}
//             src={first}
//             alt="Gallery Image"
//           />
//         </AspectRatio>
//       </GridItem>

//       {/* Outras imagens */}
//       {nextTwo.map((image, index) => (
//         <GridItem key={image} area={`small${index + 1}`}>
//           <AspectRatio ratio={4 / 3}>
//             <Image
//               rounded={{ base: 'lg', md: 'xl' }}
//               src={image}
//               alt="Gallery Image"
//             />
//           </AspectRatio>
//         </GridItem>
//       ))}
//     </Grid>
//   );
// };

// export default Gallery;


// 'use client'
// import {
//   AspectRatio,
//   GridItem,
//   Image,
//   Grid,
// } from '@chakra-ui/react';

// const Gallery = () => {
//   const newImages = [
//     "https://images.unsplash.com/photo-1733506260573-2ddbf1db9b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1726137569825-7535962addcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1739046092220-a7c903a7b741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   const first = newImages[0];
//   const nextTwo = [newImages[1], newImages[2]];

//   return (
//     <AspectRatio ratio={16 / 9} width="100%">
//       <Grid
//         width="100%"
//         height="100%"
//         templateAreas={{
//           base: `"main"
//                  "small1"
//                  "small2"`,
//           md: `"main main small1"
//                "main main small2"`,
//         }}
//         templateColumns={{ base: '1fr', md: '2fr 1fr' }}
//         templateRows={{ base: '2fr 1fr 1fr', md: '1fr 1fr' }}
//         gap={2}
//       >
//         {/* Imagem Principal */}
//         <GridItem area="main">
//           <AspectRatio ratio={16 / 9}>
//             <Image
//               objectFit="cover"
//               rounded="xl"
//               src={first}
//               alt="Gallery Image"
//             />
//           </AspectRatio>
//         </GridItem>

//         {/* Outras imagens */}
//         {nextTwo.map((image, index) => (
//           <GridItem key={image} area={`small${index + 1}`}>
//             <AspectRatio ratio={16 / 9}>
//               <Image
//                 rounded="xl"
//                 src={image}
//                 alt="Gallery Image"
//               />
//             </AspectRatio>
//           </GridItem>
//         ))}
//       </Grid>
//     </AspectRatio>
//   );
// };

// export default Gallery;

// COM O CARROSSEL

'use client'
import {
  AspectRatio,
  GridItem,
  Image,
  Grid,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery = () => {
  const imagesCarousel = [
    "https://images.unsplash.com/photo-1733506260573-2ddbf1db9b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1726137569825-7535962addcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1739046092220-a7c903a7b741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
  ];

  const nextTwo = [
    "https://images.unsplash.com/photo-1739932215472-15ebf0ab6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1739932215472-15ebf0ab6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <Grid
      templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }}
      templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={2}
    >
      {/* Carrossel dentro do GridItem */}
      <GridItem colSpan={2} rowSpan={2} w="100%" h="100%">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          stopOnHover={true}
          dynamicHeight={false}
        >
          {imagesCarousel.map((img, index) => (
            <div key={index} style={{ width: '100%', height: '100%' }}>
              <Image
                objectFit="cover"
                w="100%"
                h="100%"
                rounded={{ base: 'lg', md: 'xl' }}
                src={img}
                alt={`Carousel Image ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </GridItem>

      {/* Ajustando as imagens para ocupar 100% nos outros GridItems */}
      {nextTwo.map((image, index) => (
        <GridItem key={index} colSpan={1} rowSpan={1} w="100%" h="100%">
          <AspectRatio ratio={16 / 9} w="100%" h="100%">
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              rounded={{ base: 'lg', md: 'xl' }}
              src={image}
              alt="Gallery Image"
            />
          </AspectRatio>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Gallery;

