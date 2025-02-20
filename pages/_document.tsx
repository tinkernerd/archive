import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="An unfiltered stream of StullStudios's photos"
          />
          <meta property="og:site_name" content="archive.nicholasstull.com" />
          <meta
            property="og:description"
            content="An unfiltered stream of StullStudios's photos"
          />
          <meta property="og:title" content="Contact Sheets — StullStudios" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact Sheets — StullStudios" />
          <meta
            name="twitter:description"
            content="An unfiltered stream of StullStudios's photos"
          />
        </Head>
        <body className="bg-[#16161D] antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
