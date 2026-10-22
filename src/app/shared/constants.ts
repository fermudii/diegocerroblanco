export const GALLERY_IMAGES = [
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/diego/diego_1.webp',
    alt: 'Diego Cerroblanco',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/diego/diego_2.webp',
    alt: 'Diego Cerroblanco',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/diego/diego_3.webp',
    alt: 'Diego Cerroblanco',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/diego/diego_4.webp',
    alt: 'Diego Cerroblanco',
    title: 'Title 1'
  }

]

export function scrollToElementById(id: string, offset: number = 0) {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
