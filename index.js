const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
	res.send({hi: 'There'});
});


// Dynamic port binding for Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);


// {"web":{"client_id":"474243523783-sp93u3k6mlj63erb65a5tivk47flp3c6.apps.googleusercontent.com","project_id":"solid-justice-230101","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"x9K0MyHX2CyXhq25O8e_J0D9","redirect_uris":["http://localhost:5000/auth/google/callback"],"javascript_origins":["http://localhost:5000"]}}