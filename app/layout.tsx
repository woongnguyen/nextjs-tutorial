import type { Metadata } from 'next';
import { HeaderProvider } from "./_lib/HeaderContext";
 
export const metadata: Metadata = {
  title: {
    default: 'Feat beaver grill | Asian restaurant',
    template: '%s | Asian restaurant',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <div className="container">
          <HeaderProvider>
            {children}
          </HeaderProvider>
          <footer className="bg-black-300">
            <div className="max-w-7xl"></div>
            <h6>Keep in touch</h6>
          </footer>
        </div>
      </body>
    </html>
  )
}
