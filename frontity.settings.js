const settings = {
    name: "rg-frontity",
    state: {
        frontity: {
            url: "https://ruthgeorgiev.com",
            title: "Ruth Georgiev",
            description: "Cooking with love. Here we will serve you with a collection of the best cooking recipes, healthy tips, great foods, and how to improve your cooking skills"
        },
        newsletter: {
            slot: 'above-the-footer',
            mailchimp:{
                url: 'https://ruthgeorgiev.us10.list-manage.com/subscribe/post?u=ddb464652565465fb2305fc30&id=544679ca17'
            }
        },
        sitemap:{
            origin:"https://admin.ruthgeorgiev.com"
        }
    },
    packages: [
        {
            "name": "@frontity/twentytwenty-theme",
            "state": {
                "theme": {
                    "menu": [],
                    "featured": {
                        "showOnList": true,
                        "showOnPost": true
                    }
                }
            }
        },
        {
            name: "@frontity/wp-source",
            state: {
                source: {
                    api: "https://admin.ruthgeorgiev.com/wp-json",
                    postsPage: '/recipes',
                    homepage: '/'
                }
            }
        },
        {
            name: "@frontity/google-analytics",
            state: {
                googleAnalytics: {
                    trackingId: 'UA-164715789-1'
                },
            },
        },
        {
            name: "@frontity/google-tag-manager-analytics",
            state: {
                googleTagManagerAnalytics: {
                    containerId: 'GTM-NBGPD9N'
                },
            },
        },
        {
            name: "@frontity/google-ad-manager",
            state:{
                fills:{
                    googleAdManager:{
                        beforeHeaderAd:{
                            slot:"before-header",
                            library:"googleAdManager.GooglePublisherTag",
                            priority:5,
                            props:{
                                id:"before-header-ad",
                                unit:"/6499/example/banner",
                                size:[320,100],
                            },
                        },
                        afterHeaderAd:{
                            slot:"after-header",
                            library:"googleAdManager.GooglePublisherTag",
                            priority:5,
                            props:{
                                id:"after-header-ad",
                                unit:"/6499/example/banner",
                                size:[320,100],
                            },
                        }
                    }
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react",
        "@frontity/head-tags",
        "frontity-contact-form-7"
    ]
};

export default settings;
