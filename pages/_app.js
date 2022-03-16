import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'

import { RecoilRoot } from 'recoil'
import { SessionProvider } from 'next-auth/react'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
    // <SessionProvider session={session}>
    //   <RecoilRoot>
    //     <Layout>
    //       <Component {...pageProps} />
    //     </Layout>
    //   </RecoilRoot>
    // </SessionProvider>
  )
}

export default MyApp
