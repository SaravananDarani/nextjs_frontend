import ErrorBoundary from '@/services/errorBoundary';
import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: any) {
  const Layout = Component.Layout || EmptyLayout;
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" ></script>
      <ErrorBoundary >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </>
  )
}

const EmptyLayout = ({ children }: any) => <>{children}</>