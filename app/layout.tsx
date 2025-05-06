import './globals.css';
import NavBar from './components/NavBar';


export const metadata = {
  title: 'BlockFund',
  description: 'A Next.js App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <NavBar />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
