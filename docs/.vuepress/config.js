module.exports = {
    base: '/node-red-contrib-home-assistant-websocket/',
    title: 'node-red-contrib-home-assistant-websocket',
    description:
        'Node-RED integration with Home Assistant through the WebSocket and HTTP API',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    plugins: [
        ['@vuepress/google-analytics', { ga: 'UA-155074503-1' }],
        ['@vuepress/plugin-back-to-top', true],
        '@vuepress/medium-zoom',
    ],
    themeConfig: {
        repo: 'zachowj/node-red-contrib-home-assistant-websocket',
        repoLabel: 'Github',
        docsDir: 'docs',
        docsBranch: 'dev',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Guides', link: '/guide/' },
            { text: 'Nodes', link: '/node/' },
            { text: 'FAQ', link: '/FAQ.md' },
            { text: 'Cookbook', link: '/cookbook/' },
        ],
        sidebar: {
            '/cookbook/': [
                {
                    title: 'Cookbook',
                    collapsable: false,
                    children: [
                        'get-entities',
                        'jsonata',
                        'motion-triggered-light',
                        'saving-and-restoring-states',
                        'get-state_changed-events-based-on-area',
                        'sun-events',
                        'vacation-mode',
                        'expiration-date-monitor',
                    ],
                },
            ],
            '/guide/': [
                {
                    title: 'Guides',
                    collapsable: false,
                    children: [
                        '',
                        'first-automation',
                        'conditionals',
                        'mustache-templates',
                        'jsonata',
                    ],
                },
                {
                    title: 'Custom Integration',
                    collapsable: false,
                    children: [
                        'custom_integration/',
                        'custom_integration/event-nodes',
                        'custom_integration/switch',
                    ],
                },
                {
                    title: 'Contribute to',
                    collapsable: false,
                    children: ['development', 'documentation'],
                },
            ],
            '/node/': [
                {
                    title: 'Nodes',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        'API',
                        'call-service',
                        'config-server',
                        'current-state',
                        'entity',
                        'events-all',
                        'events-state',
                        'fire-event',
                        'get-entities',
                        'get-history',
                        'get-template',
                        'poll-state',
                        'trigger-state',
                        'wait-until',
                        'webhook',
                    ],
                },
            ],
        },
    },
};
