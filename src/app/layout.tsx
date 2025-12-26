import "./globals.css";
import BodyBackgroundController from "./BodyBackgroundController";

export const metadata = {
  title: "Kittipakorn",
  description: "Kittipakorn's website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="transition-colors duration-500">
        <BodyBackgroundController />
        {children}
      </body>
    </html>
  );
}
