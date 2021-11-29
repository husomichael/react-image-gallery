# React Image Gallery

## Description

Duration: 4 days.

An application made with React that has 3 components that render a gallery of images to the DOM.

The App component has the function fetchGallery() that sends a get request to /gallery and uses react's useState to set the gallery from the server to an array. React's useEffect is called to fetch the gallery once on load. The function can be called any time the gallery data is updated to set the gallery data's state and re-render the dom at the same time.

The App component also has the function setLikes(id) that sends a put request to /gallery/likes/${id}. When the server recieves that request it adds 1 to the number of likes tied to the id of the route. setLikes is sent down to GalleryList.jsx and to GalleryItem.jsx as a prop to be called in GalleryItem.jsx.

The GalleryList component uses the galleryArray as a prop from the App component and maps through the array.

The GalleryItem component is rendered once per map from GalleryList. GalleryItem renders the gallery image of the current map. A click handler is tied to the image to toggle a boolean showPicture. showPicture renders the gallery image on true, when false the image's description will be rendered in the images place. A "Like" button is rendered below the picture. Next to the button the number of likes tied to that picture are rendered. The Like button calls setLikes on click with the current image's id sent as the parameter.

## Screenshot

![Screenshot of App](/public/images/screenshot.png)

## Built With

React.js, Axios, Node.js

## Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.

## Support

If you have any suggestions, questions, or issues, please email me at husomichael@gmail.com




