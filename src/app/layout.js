// app/layout.js

import "./glob.css";

export const metadata = {
  title: "Link Sharing App",
  description: "Share Your Link Simple Way!",
  icons: {
    icon: '/images/logo-devlinks-small.svg',
  },
  openGraph: {
    title: "Link Sharing App",
    description: "Share Your Link Simple Way!",
    url: "https://ismail-link-sharing-app.vercel.app/", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/thypgk1nmxm4modj1wdl.jpg",
        width: 700,
        height: 700,
        alt: "Link Sharing App Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Link Sharing App",
    description: "Share Your Link Simple Way!",
    images: [
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/thypgk1nmxm4modj1wdl.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAFA]">{children}</body>
    </html>
  );
}
