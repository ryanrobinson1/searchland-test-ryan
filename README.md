# Ryan Robinson - Searchland tech test

## Notes to Archie and co.

### Things I lacked experience in
- First time creating a monorepo from scratch (they're really cool!). I opted for Turbo because 1.) Backed by Vercel, 2.) Really easy to use, 3.)  Popular in the dev community
- First time creating a tRPC server (I've only watched tutorials, closest exp has been GraphQL)
- First time using Tailwind (I'm familiar with it, but haven't used it before) so I think I could improve some of the reusability of the frontend code.

### Tech decisions 
- Tailwind: Great for rapid prototyping 
- UI library: Makes code highly reusable which makes it easy to have a consistent design across the website (could be many different apps)
- CRA: Latest version of Next and tRPC don't play nicely
- Shared-Ts: Enables the sharing types between the frontend and backend 
- Transforming a database entity into an interface i.e. `UserEntity -> User`. Entity objects can contain sensitive data that we might not want to expose so having a mapper object removes this risk. (I believe there is a toJSON method we can use with TypeORM but I haven't had the time to research this). I would also move from the service file into a DTO file.
- No database migration files. Not enough time so I've gone with synchronisation instead. I'm more than capable of adding in, I would remove the sync in the DB config, create an management endpoint that will run the npm command for TypeORM to run all migration files. I won't run migrations on startup as this is a bad idea for production. This method allows a controlled migration (and reverting) process. 


### Things I would do with more time
- Env vars: I would get the PORT and DB configurations and any other config vars from env files
- Implement tRPC error handling: Currently the app breaks if there's an error. 
- Logging: I would use morgan and winston for logging
- Testing: I would have unit tests at the bare minimum for all endpoints and some basic unit tests for the UI. I would have E2E tests across key flows (creating a user) 
- I would create a routes variable in `web`, containing all of the routes for the application and use this to get the name of routes rather than hard coding throughout the app
- I would have better UX when performing an action such as creating a user/updating a user
- I would handle UI errors so users can know what went wrong and what to do next





## Getting started

Install dependencies
```sh
npm run ci
```


Run all repos inside the monorepo
```sh
npm run dev
```

Browse to `http://localhost:3000` to view the home page. From there you can navigate to the required pages

View `http://localhost:4000` inside API testing tool, tRPC routes are nested underneath the endpoint `/tprc`


## Apps and Packages

- `server`: a node express server
- `web`: a [create-react-app](https://create-react-app.dev) app (latest version of next doesn't support tRPC so opted against using Next)
- `ui`: a stub React component library that is only used by `web` but can be used across other frontend repos
- `shared-ts` a library of typescript types that are shared throughout the monorepo
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-react` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo


### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
