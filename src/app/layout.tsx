import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import {ThemeProviderClient} from "@/theme";

export const metadata: Metadata = {
  title: "Pathfinders",
  description:
    "A collaboration between 5 projects, working to innovate through the NSF cyberinfrastructure landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProviderClient>
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </ThemeProviderClient>
    </html>
  );
}
