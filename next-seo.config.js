/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "DeFi Exposed by CIROVE",
  titleTemplate: "%s | by CIROVE",
  defaultTitle: "DeFi Exposed by CIROVE",
  description: "DeFi Exposed by CIROVE",
  canonical: "https://defi.exposed",
  openGraph: {
    url: "https://defi.exposed",
    title: "DeFi Exposed by CIROVE",
    description: "DeFi Exposed by CIROVE",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "DeFi Exposed CIROVE og-image",
      },
    ],
    site_name: "DeFi Exposed by CIROVE",
  },
  twitter: {
    handle: "@cisostartups",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
