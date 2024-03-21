import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-circular-progressbar/dist/styles.css";
import "typeface-heebo";
import "typeface-roboto";
import "@css/animate.min.css";
import "@css/besit-icons.css";
import "@css/bootstrap.min.css";
import "@css/fontawesome-all.min.css";
import "@css/fontawesome-all.min.css";
import "@css/themify-icons.css";
import "@css/style.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return(
    <>
    <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KCDN568')`,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `(function(d,t) {
                var BASE_URL="https://overgroup-chatwoot-ateei.em5vrs.easypanel.host";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.defer = true;
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({
                    websiteToken: 'mEJ9trrN7W35T9mJQ7eUKJ32',
                    baseUrl: BASE_URL
                  })
                }
              })(document,"script");`,
            }}
          />
      <Component {...pageProps} />
    </>
    ) 
}
