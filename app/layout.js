"use client"; 
import Navigation from "@/components/Navigation";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/utilites/redux/store";

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className="">   
        <Provider store={store}>
        <Navigation/>
        {children}
        </Provider>
      </body>
    </html>
    
  );
}
