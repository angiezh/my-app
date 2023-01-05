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
                <img src="/angiez.jpg" alt="Image of Angie Zhou" id="angie-z" />
            </div>
            <div id="middle">
                <h1>Hi, I'm Angie!</h1>
            </div>
            <div id="bottom">
                <p>I'm a Computer Science major and Cognitive Science minor at Pomona College. I'm interested in web design, video game design, and machine learning.
                </p>

                <p>
                    Email me at azaa2021@mymail.pomona.edu to reach me. Looking forward to connecting!
                </p>  
            </div>
            <hr/>
            <h1>
                Projects:
            </h1>
            <div id="flex-container">
                <div className="project-box">
                    <img src="/cutebunny.jpg" alt="Cute bunny"/>
                    <h2>Cute Bunny Image</h2>
                    <p>Created an image of a cute bunny through Photoshop.</p>
                </div>
                <div className="project-box">
                    <img src="/pinksky.jpg" alt="Pink sky"/>
                    <h2>Pink Sky</h2>
                    <p>Coded a website that autogenerates a unique pink sky.</p>
            </div>
            
            </div>
            <p>

                
            </p>
        </div>
         
        </>
    );
}
