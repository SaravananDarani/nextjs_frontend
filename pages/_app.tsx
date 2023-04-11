import ErrorBoundary from '@/services/errorBoundary';
import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';

const App = ({ Component, pageProps }) => {
  const Layout = Component.Layout || EmptyLayout;
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return ( 
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
  )
}
const EmptyLayout = ({ children }: any) => <>{children}</>
export default App;