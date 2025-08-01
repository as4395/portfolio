import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/portfolio-site', 
    }
  }
};
