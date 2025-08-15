import "@/styles/globals.css";
import Script from "next/script";
import AuthModal from "@/components/auth/auth-model";
import ToastProvider from "@/providers/toast-provider";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				{/* Google Site Verification */}
				<meta
					name="google-site-verification"
					content="VN_fJPgM-tY_ek6GvEHHxpMHu8HpNJsrpWYWksDUR-A"
				/>

				{/* Google Tag Manager */}
				<Script
					id="gtm-init"
					strategy="afterInteractive">
					{`
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBVFGMS5');
          `}
				</Script>

				{/* Google Analytics */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-3FC6CNTHH4"
					strategy="afterInteractive"
				/>
				<Script
					id="ga-init"
					strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3FC6CNTHH4');
          `}
				</Script>
			</head>
			<body
				style={{
					background:
						"linear-gradient(0deg, rgba(0, 65, 109, 0.72) 0%, rgba(0, 65, 109, 1) 50%, rgba(0, 65, 109, 0.73) 100%)",
				}}>
				{/* GTM noscript */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-KBVFGMS5"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}></iframe>
				</noscript>

				<AuthModal />
				<ToastProvider />
				{children}
				{/* Tawk.to Live Chat */}
				<Script
					id="tawkto"
					strategy="afterInteractive">
					{`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
                  s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/67d1f9988ebbe7190b12ce5d/1im63dvod';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
				</Script>
			</body>
		</html>
	);
}
