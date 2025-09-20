"use client"; 
import "../globals.css";
import Navigation from "@/components/Navigation";


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className="">   
        <div className="fixed w-full"><Navigation/></div>
        {children}
      </body>
    </html>
    
  );
}
