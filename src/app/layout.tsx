import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Valdemar Hidalgo Esquivel",
  description: "Portafolio de Kevin Valdemar Hidalgo Esquivel, Ingeniero en Sistemas y Desarrollador Full Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main className="main-container">
          {children}
        </main>
      </body>
    </html>
  );
}
