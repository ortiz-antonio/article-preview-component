module.exports = config => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // config.addFilter('md', require('./src/filters/md.js'))
  config.addWatchTarget('./src/css/**/*.css');
  config.setWatchThrottleWaitTime(300);
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
