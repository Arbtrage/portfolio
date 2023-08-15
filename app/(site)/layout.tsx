import Link from "next/link";
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
    <html lang="en" className="bg-custom-background text-custom-color mx-auto">
      <body className=" overflow-x-hidden min-w-screen flex min-h-screen flex-col items-center justify-between">
        <main className="p-4 py-12 gap-6 w-full lg:w-[55%]">
          <section className="w-full flex gap-4 justify-start mb-6 p-2">
            <div className="flex flex-col gap-2 justify-center">
              <Link
                href="/"
                className="mb-0 text-2xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-bold"
              >
                Sayantan (This site is under development)
              </Link>
              <h6 className=" text-sm mb-0 text-zinc-400 font-semibold leading-none">
                Student • Developer • Wanderer
              </h6>
            </div>
          </section>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
