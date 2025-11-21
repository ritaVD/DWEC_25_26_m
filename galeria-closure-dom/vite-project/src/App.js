import createGalleryApp from "./components/GalleryApp";

export default function createApp() {

  const GalleryApp = createGalleryApp();
  return GalleryApp.element;

  
}
