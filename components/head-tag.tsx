import Head from 'next/head';

export const HeadTag = () => ( 
    <Head>
        <title>Dev Resources</title>
        <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
        />
        <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
    </Head>
);