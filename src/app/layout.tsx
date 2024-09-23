import { ModeToggle } from '@/components/theme-switcher';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from './providers';
import StyledJsxRegistry from './registry';

// import type { Route } from 'next';

export const metadata: Metadata = {
  title: 'Tmpl Nextjs',
  description: 'Nextjs 项目模板',
  keywords: ['nextjs'],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StyledJsxRegistry>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="p-2">
              <ModeToggle />
              <div className="py-2">{children}</div>
            </div>
          </ThemeProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
