import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elisio's Code",
  description: "Elisio's personal portofolio",
};

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      <>{children}</>
    </>
  );
}
