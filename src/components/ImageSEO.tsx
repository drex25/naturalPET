import React from 'react';

interface ImageSEOProps {
  images: Array<{
    url: string;
    alt: string;
    caption?: string;
    title?: string;
    width?: number;
    height?: number;
  }>;
  pageUrl: string;
}

const ImageSEO: React.FC<ImageSEOProps> = ({ images, pageUrl }) => {
  // Generate structured data for images
  const generateImageStructuredData = () => {
    return images.map(image => ({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "url": image.url,
      "description": image.alt,
      "name": image.title || image.alt,
      "caption": image.caption || image.alt,
      "width": image.width,
      "height": image.height,
      "contentUrl": image.url,
      "thumbnailUrl": image.url.replace(/\.(jpg|jpeg|png)/, '-thumb.$1'),
      "license": `${pageUrl}/license`,
      "acquireLicensePage": `${pageUrl}/license`,
      "creditText": "NaturalPET - Primera tienda naturista para mascotas",
      "creator": {
        "@type": "Organization",
        "name": "NaturalPET"
      },
      "copyrightHolder": {
        "@type": "Organization",
        "name": "NaturalPET"
      }
    }));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Galería de imágenes NaturalPET",
    "description": "Imágenes de productos y servicios de NaturalPET - Primera tienda naturista para mascotas",
    "image": generateImageStructuredData()
  };

  return (
    <>
      {/* Structured Data for Images */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />

      {/* Preload critical images */}
      {images.slice(0, 2).map((image, index) => (
        <link
          key={index}
          rel="preload"
          as="image"
          href={image.url}
          media="(min-width: 768px)"
        />
      ))}

      {/* DNS prefetch for external image domains */}
      <link rel="dns-prefetch" href="//images.naturalpet.com" />
      <link rel="preconnect" href="//images.naturalpet.com" crossOrigin="" />
    </>
  );
};

export default ImageSEO;