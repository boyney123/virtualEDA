module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  publicRuntimeConfig: {
    MEETUP_URL: 'https://www.meetup.com/virtualeda/',
    DISCORD_INVITE_URL: 'https://discord.gg/cnQpMmZMKf',
    SUBMIT_TALK: 'https://f213i4mtr5i.typeform.com/to/wBYYZmXp'
  },
  async redirects() {
    return [
      {
        source: '/speaking',
        destination: 'https://f213i4mtr5i.typeform.com/to/wBYYZmXp',
        permanent: true,
      },
    ]
  },
};
