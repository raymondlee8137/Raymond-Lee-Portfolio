import Navbar from "./components/Navigation/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className = "bg-gray-900 text-white">
        <Navbar />
        <main>{children}</main> 
        </div>
      </body>
    </html>
  );
}