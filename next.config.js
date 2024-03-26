const path = require('path');

module.exports = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['ru', 'uk'],
    defaultLocale: 'ru',
  },
};
