import type { Metadata } from 'next';
import { HeaderProvider } from "./_lib/HeaderContext";
import './globals.css'
 
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
    <html lang="vi" data-theme="light">
      <body>
        <div className="container">
          <HeaderProvider>
            {children}
          </HeaderProvider>
          <footer className="bg-black/80">
            <div className="max-w-7xl mx-auto flex justify-between p-4 text-white">
              <h6>Keep in touch</h6>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
