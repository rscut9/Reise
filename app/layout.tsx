import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reise | Rutas que inspiran',
  description: 'Planifica y guarda tus rutas de viaje.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
