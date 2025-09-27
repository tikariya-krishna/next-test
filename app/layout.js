"use client"; 
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/utilites/redux/store";


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" /></head>
      <body className="">   
        <Provider store={store}>
        {children}
        </Provider>
      </body>
    </html>
    
  );
}
