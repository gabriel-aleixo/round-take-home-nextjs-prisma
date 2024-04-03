# Finances Dashboard Demo Project

## Tech Stack

- Next.js
- Prisma
- SQLite
- TypeScript
- Tailwind CSS

## Key Components

- **Next.js** for the React framework, providing server-side rendering and static site generation.
- **Prisma** as the database ORM, enabling seamless database integration.
- **Tailwind CSS** for utility-first styling, facilitating responsive design with ease.

## Features

- Implement data model using Prisma to replicate Yapily Accounts and Transactions data structure
- Exposes API endpoints to query Accounts and Transactions data from the database.
- Implements responsive design using Tailwind CSS.
- Utilizes TypeScript for type-safe coding practices.

## Demo

Watch the demo video of the project here: [Demo Video](https://youtu.be/iSYg3JriDNU?si=iQnq5ga0z4zwFwP6)

## Assumptions and comments

- The Prisma schema is missing the "Consents" data from Yapily, which would carry the institution ID. Currently, there's no info about the account's institution.
- The seed script is simply linking transactions to an account in the mock data. The transactions recovered from the Yapily API would need to be linked to account Ids.
- API endpoints are not handling unalowed methods and are not checking for authentication nor authorization.

### Draft workflow to sync DB with Yapily

- To sync data with Yapily, the workflow could include:
  - A cloud scheduler or similar, performing regular calls to an internal API endpoint;
  - A database function returns a list of accounts to be updated, along with the consent tokens to retrieve the data. _(Check whether the token needs to be refreshed for every call.)_
  - Server side function builds a queue, calls the API and stores data in buckets.
  - Server side function reads data and updates database _(this would involve defining business rules such as length of history, conflict resultions, etc)_;
  - Any accounts that cannot be updated would need to be flagged in the database for retrying or for user intervention;

### Security considerations

- Encript data in the database and use https for calls to the the API.
- Use Auth provider (Auth0, Supabase?) for frontend and API calls
- Manage Authorizations with row level security or similar.
- Set approrpiate security headers in the application.

### Getting Started

To run the project locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.

Open `http://localhost:3000` to view it in the browser.

### Feedback and Contributions

Feedback and contributions are welcome. Please feel free to issue pull requests or submit issues through GitHub.

---

Built in Berlin using the 💪 🌌.
