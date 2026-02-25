export default {
  rootDir: '.',
  open: '/',
  middleware: [
    (context, next) => {
      // Handle the netlify path redirect to serve index.html
      const path = context.path;

      // If it's a request for the netlify path, serve index.html
      if (path.startsWith('/https://699e889657824a8e0873df86--fire-fund-admin.netlify.app')) {
        context.path = '/index.html';
        return next();
      }

      // Serve index.html for root and all routes (no file extension)
      if (path === '/' || !path.includes('.')) {
        context.path = '/index.html';
      }
      return next();
    }
  ]
};
