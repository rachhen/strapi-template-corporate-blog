module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6bf7a4f08c38314957c3bac1b59c679d'),
  },
});
