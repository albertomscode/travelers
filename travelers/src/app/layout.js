import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Travel Blog",
  description: "Explore amazing destinations and share your travel experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-mono bg-gray-100">
      <body className="text-gray-800">
        <Header />
        <div className="text-center">
          {children}
        </div>
      </body>
    </html>
  );
}
