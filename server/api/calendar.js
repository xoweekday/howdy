const { Router } = require('express');
const { google } = require('googleapis');

const calendarRouter = Router();

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const GOOGLE_PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKK8wt/lYxDEyD\nG9uzhq5War8TUoRZ2RNZSSq5HyfuI4FnLlWjc6Iw6XavEv2AaKD9wYzPffjB58ss\nCiBLZy/2JD8XMxb7vDikHZEJGSh0LAeoXqstJk2BFW14CjoUbxyZJACvaPcgGixi\nU4FpZWh0UMXq3bz3OaKKzz6jmm9VW0YxPz42nOSZvidSaMf3cneIAebkNELb8cMr\n9TTvwU+S5QEs626+var/dJ0qzHTUKCMNBCMRnAEdA/KZbH+Jj2kgILAHIPbzQEc6\ngAlaHyOLk+qFan/exrAwDhAeu9zz5W66EZLmp0bbhDjyCD4JzNIhpWOK2Fed2oXP\nb7H1LSelAgMBAAECggEAC7odpl9V7ZNqjsJbbJ731uBrQ/op3jJWynuRhFp3zPr3\nQx5vbkNDWbX5Ie+mj7/B8uY6vkBu4QSKhvvxYp5SLGNu23AluaVx3acvZgk1DQQO\nz6fqIvzRSxcMmgVx2ASX8pQhjAs5Jn4OLAfu/keZFwImcNi64NZRhN6/oerP4XIG\n7w0sfu4V6ErdN7T5JdK5twqp0zrgCZZSibJpYI0oI9nr/0HylLvc2tj4xVwpiTLi\nRoiGzUXjfciIXvBT8pV53LIAv+WJq9UDTplmdfwNjW/OKXt3NuZeQc71GPur7Lxh\neO8pZK8ln+rl+iaLh8hsXPYVwFjC5qa2Jnk7yfLUYwKBgQD5qKtf0MFlK7cnXB7r\nUmXdAZ+L3lF17WF4Jl24oHjp5DR9elY9mUfhADee8Sjw/VCTuLgdn2XsqbmdtUW0\nddKESHgiw+kE+0U17V0EbBnk/x2v1WjNAh2qjRbdVNH5wYvk5FgEKryeirdUUOaf\nbWXPkSTRIO3d/Dl4ru11gMQtUwKBgQDPTlp05l+zZGmwSrjrGm9BwBq2evrbclPP\nyPQtOB1rkwICHquPckRr6ARZwQiz/3z8oXNK7DjKF+fmsC8VfurkXAcjGtyGKcSC\n5kIX7YxUXj3Bp6XMKGoL/Q33XRIyofLCwE0U2w88qlRs9a1xVcwuaWnuRclCSEJH\n8AfKgATAJwKBgB47ToVLwh9+K6+YeCYG1E7u42MMiNC+7g6elrrEs9+ewrxvFAJh\njVKxtAqLKWoFQrygoar0omMGKnPuf4JawiNCo0mSb6UqyDa/h4QBkyEnw3CHZyls\nGCuO6jXjD4ou5cHR5NacVjrckVakdUjY9nssGEk6s5Mt98elZxvTe+4BAoGBAKYs\n0sneWVx941KTs0OSfxifm0onrqr2LETlewY8cyjmQLfeSfvExyAQblxcJlPTOydv\na/HlBWjKXPRIypValYPUWUxEnf1VwdaEKPrxSoneuXZgosDSrJ9LjER7cLjxpJ2E\ndMWBC+e/ScnF7fBprDCQA4AipL/jGG599GDY2fYFAoGBAODjnId+WikBhTm7Xf5B\nUf/P307AJk36bXjEhbiM3Y+KACTUlXAcoLVZr4mgNUQohWOYw8ltkM9I4HZk+kA6\nHC3WFRVs6t2H8ILW4dCwnLNnwwhzObyPl/LDnHaVKKY81Ee8E+THREf8PNnaf+Hn\ngM2oXor+zzHaRcjXv0URdwWl\n-----END PRIVATE KEY-----\n';
const GOOGLE_CLIENT_EMAIL = 'howdy-7@teamnoodlehowdy.iam.gserviceaccount.com';
const GOOGLE_PROJECT_NUMBER = '90577264534';
const GOOGLE_CALENDAR_ID = 'teamnoodlehowdy@gmail.com';

calendarRouter.get('/', (req, res) => {
  const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES,
  );
  const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient,
  });

  calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      console.log(error);
      res.send(JSON.stringify({ error }));
    } else if (result.data.items.length) {
      res.send(JSON.stringify({ events: result.data.items }));
    } else {
      res.send(JSON.stringify({ message: 'No upcoming events found.' }));
    }
  });
});

module.exports = {
  calendarRouter,
};
