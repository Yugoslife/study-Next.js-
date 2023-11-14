// pages/_app.js
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import '../styles/globals.css';  // Убедитесь, что путь верный

function MyApp({ Component, pageProps }) {

    const router = useRouter();
    const showNav = router.pathname !== '/';  // не отображать на главной странице


    return (
        <div>
            {showNav && <Nav />}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
