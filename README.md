# My-brand-api

![build](https://github.com/sostene12/my-brand-api/actions/workflows/actions.yml/badge.svg?event=push)
![check-code-coverage](https://img.shields.io/badge/code--coverage-81.22%25-green)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com) 


## Capstone-project -api   


# Description

My-brand-ap is capstone project which is comprised of the features like `signup, login, blogs and emailing`, it will allow visitors of my portifolio to communicate by filling the form of contact and also comment on the blogs that i will be posting on my portifolio. it also have
the documentation of the endpoints.

#### Users
  - Guest
    - can login and signup
    - can comment on the blog post
    - can also send an email by filling contact form
  - Admin
    - can implement CRUD of the blog posts
    - can implement CRUD od the users and their roles
    - can read, reply and deleted the sent contacts or emails

# Technologies

- NodeJs and Express
- MongoDb
- Chai and Mocha for testing

# Requirement & installation steps

- you need the following to be able to run the application 
  - Node : javascript runtime environment
  - Postman : testing API endpoints
  - VS code : for editing and running the app
  - MongoDB : for Database(optional)
  - browser

## Getting Started
remember ro create env file and add the values from `.env.example` file
``` bash
git clone https://github.com/sostene12/my-brand-api.git
npm install 
#or
yarn

npm run dev
# or
yarn dev
```

## Testing
```
npm run test
```

# Author

NG Sostene : Fullstack developer
