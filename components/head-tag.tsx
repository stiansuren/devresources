import Head from 'next/head';

export const HeadTag = () => ( 
    <Head>
        <title>tuts & tips</title>
        <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
        />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:700|Work+Sans:500,700&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
    </Head>
);