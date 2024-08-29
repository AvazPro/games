import noImage from "../assets/no-image-placeholder.webp";
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  if (!url.includes('/games')) return url;
    let index = url.indexOf('/games');
    return url.slice(0, index) + '/crop/600/400' + url.slice(index);
  };
  
  export default getCroppedImageUrl;
  