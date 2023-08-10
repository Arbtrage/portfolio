import "../globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Arbitrage",
  description: "Welcome to the portfolio of Sayantan",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-custom-background text-custom-color max-w-4xl mx-auto py-5 "
    >
      <body className="mx-5">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
