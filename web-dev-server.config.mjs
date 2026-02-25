export default {
  rootDir: '.',
  open: '/',
  middleware: [
    (context, next) => {
      // Serve index.html for root and all routes
      if (context.path === '/' || !context.path.includes('.')) {
        context.path = '/index.html';
      }
      return next();
    }
  ]
};
