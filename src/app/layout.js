import localFont from "next/font/local";
import "./glob.css";

export const metadata = {
  title: "Link Sharing App",
  description: "Share Your Link Simple Way!",
  icons:{
    icon:'/images/logo-devlinks-small.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAFA]">{children}</body>
    </html>
  );
}
