import Head from "next/head";

const About = ({meta}) => {
    console.log('meta: ',meta);
    return ( 
        <>
            <Head>
                <title> {meta.title} </title>
                <meta name="description" content={meta.content} />
            </Head>
            <h1>About Page</h1>
        </>
     );
}
 
export default About;

export function getStaticProps(){
    return{
        props:{
            meta: {
                title: 'About Meta',
                content: 'About Meta Content'
            }
        }
    }
}

