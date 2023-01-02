import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      // open graph protocol
      <Html prefix="og: http://ogp.me/ns#">
        <Head>
          {/*Favicons*/}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"/>
          <link rel="manifest" href="/manifest.json"/>

          {/*inter web font*/}
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          {/*font awesome icons*/}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
        
          {/*metadata*/}
          <meta
            property="og:title"
            content="Melvin's Portfolio"
          />
          <meta
            name="image"
            property="og:image"
            content="/preview_thumbnail.png"
          />
          <meta
            name="author"
            content="Melvin He"
          />
          <meta
            property="og:description"
            content="Welcome to Melvin He's website!"
          />
          <meta
            property="og:url"
            content="https://melvin-he.dev"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </Html>
    )
  }
}
