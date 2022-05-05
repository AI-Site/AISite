/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AISite",
  tagline: "A learning resource which contains information on AI history, algorithms and demos.",
  url: "https://AISite.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "AISite",
  projectName: "AISite.github.io",
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/runlet.png",
    navbar: {
      hideOnScroll: true,
      title: "AISite",
      logo: {
        alt: "AISite logo",
        src: "img/logo.png",
        srcDark: "img/logo.png",
      },
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Learn",
          position: "left",
        },
        { to: "blog", label: "Demos", position: "left" },
        {
          href: "https://github.com/A-Waked/AIDemos",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "AISite",
          items: [
            {
              label: "FAQ",
              to: "docs/faq",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Learn",
              to: "docs",
            },
            {
              label: "Demos",
              href: "https://github.com/A-Waked/AIDemos/releases",
            },
            {
              label: "External Resources",
              to: "docs",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/A-Waked/AIDemos",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AISite. All rights reserved.`,
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/A-Waked/AIDemos",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/A-Waked/AIDemos",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        googleAnalytics: {
          trackingID: "UA-132764481-1",
          anonymizeIP: true,
        },
      },
    ],
  ],
}

module.exports = config
