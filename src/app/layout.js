import localFont from "next/font/local";
import "./glob.css";
import Head from "next/head"; 

export const metadata = {
  title: "Link Sharing App",
  description: "Share Your Link Simple Way!",
  icons: {
    icon: '/images/logo-devlinks-small.svg'
  }
};

export default function RootLayout({ children }) { // Accept previewImage as a prop
  return (
    <html lang="en">
      <Head>
        
        <meta property="og:image" content="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/thypgk1nmxm4modj1wdl.jpg" /> 
      </Head>
      <body className="bg-[#FAFAFA]">{children}</body>
    </html>
  );
}
