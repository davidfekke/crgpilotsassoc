module.exports = {
    siteMetadata: {
        title: `Craig Aircraft Pilots Association`,
        description: `Craig Aircraft Pilots Association website for Jacksonville Executive Airport (JAXEX).`,
        url: 'https://www.craigpilots.org',
        siteUrl: 'https://www.craigpilots.org'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/news/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `static`,
              path: `${__dirname}/static`
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 1160,
                        },
                    },
                ],
            },
        },
    ]
}