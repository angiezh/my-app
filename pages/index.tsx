import Head from "next/head";

export default function Index() {
    return (
        <>
        <Head>
            <title>Angie Z</title>
            <meta name ="description" content="Welcome!"/>
        </Head>
        <div id="container">
            <div id="top">
                <h1>Home</h1>
                <hr/>
                <p>This is the home page!!!</p>
            </div>
            <div id="bottom">
                <img src="/cutebunny.jpg" alt="Image of cute bunny wearing bunny ears" id="cute-bunny" />
            </div>
        </div>
         
        </>
    );
}
