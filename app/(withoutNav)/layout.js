"use client"; 
import Footer from "@/components/Footer";
import "../globals.css";
import Navigation from "@/components/Navigation";


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className="">   
        <div className="fixed w-full z-40"><Navigation/></div>
        {children}
        <div className="bottom-0"><Footer/></div>
      </body>
    </html>
    
  );
}
