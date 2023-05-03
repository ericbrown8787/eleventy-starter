module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/images/');
  eleventyConfig.addWatchTarget('./src/css/');
  // Return your Object options:
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
