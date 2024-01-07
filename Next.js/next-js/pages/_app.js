import Layout from "@/components/Layout";

export default function App({Component, pageProps}) {
    return (
        <Layout>
        <div><Component {...pageProps} />
        <span>hello</span>    
        </div>
        <style jsx global>{`
        a{
            text-decoration : none;
            color : white
        }
        `}
        </style>
        </Layout>
    );
}