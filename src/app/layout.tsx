import type { Metadata } from "next";
import { Pacifico, Poppins, Raleway } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Saidbar from "./components/Saidbar";
import MainContant from "./components/MainContant";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  style: ['normal', 'italic'],
  variable: '--font-poppins', 
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ['400', '500', '700'], 
  style: ['normal', 'italic'],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ['400'], 
  style: ['normal'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins?.variable} ${raleway?.variable} ${pacifico?.variable}  antialiased `}
      >
        <Header/>
        <div className=" bg-[#EBF2FA] py-[152px]">
        <div className="container"> 
          <div className="flex flex-col sm:flex-row gap-[9px]">
           <Saidbar/> 
          <MainContant/>  
          </div>
         
        </div> 
        </div>
       
         {children} 
    
      </body>
    </html>
  );
}
