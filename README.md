# youtube-subscribers backend project
Youtube subscribers backend Api to get the subscribers using specific routes end point made using Node.js , Express.js and MongoDB.
By including particular routes end point in the URL, users can access all subscribers, particular subscriber through specific ID, create new subscriber , delete & update subscriber through particular IDs.

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Content</summary>
    <ol>
        <li><a href="#features">Features</a></li>
        <li><a href="#Quick-Start">Quick Start</a></li>
        <li><a href="#how-to-run-locally">How to run Locally</a></li>
        <li><a href="#API-Reference">API reference</a></li>
        <li><a href="#faq">FAQ</a></li>
    </ol>
</details>


## How to run Locally

Clone the project

```bash
  https://github.com/pavandeveloperr/youtube-subs-alma.git
```

Go to the project directory

```bash
  cd Youtube-subs-alma
```

Install dependencies

```bash
  npm install
```
Create .env file using .env.sample.

Set the environment key DATABASE_URL with you mongoDB connection URL

Start the server

```bash
  npm run start
```


## Quick Start

Node.js module should be installed in your machine befor download the project and run this command

```bash
  npm install
```
Start the server:
```bash
  npm start
```

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

#### Get all subscribers

```http
  GET /subscribers
```

#### Get all subscriberChannel and name only

```http
  GET /subscribers/names
```

#### Get single subscriber

```http
  GET /subscribers/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to fetch |

#### Add subscriber
```http
  POST /subscribers
```

#### Delete subscriber
```http
  DELETE /subscribers/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to delete |

#### Update subscriber
```http
  POST /subscribers/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to update |




## Demo
Demo weblink: https://drive.google.com/file/d/1WtzqM4XIg0L6GbJGzSrhLoU05CglydjC/view?usp=sharing


## Features

- Access all subscribers from remotely hoisted database
- Add new subscriber to database
- Access perticular data from database through a specific IDs
- Delete subscriber from the database through a specific IDs
- Update existing subscriber in the database through a specific IDs
- Access only subscriber list with names and subscribed Channels



## Deployment
Deployment link:
 https://youtube-subscribers.vercel.app


## FAQ

#### How to add new subscribers?

Use Postman to add new subscriber in the database.

#### How to delete new subscribers?
Use Postman to Delete subscriber from the database.

#### How to update new subscribers?
Use Postman to update subscriber from the database.

## 🚀 About Me
I am a tech and web dev enthusiast. 


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-pavankulkarni.vercel.app)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pavankulkarnii/)

## Screenshot
<img width="958" alt="ss1" src="https://user-images.githubusercontent.com/63870995/212375612-da86a564-40dd-413d-b620-d20c90bdc304.png">
<img width="960" alt="ss2" src="https://user-images.githubusercontent.com/63870995/212375655-0932a6f4-ec79-4922-95ad-36267a75aed5.png">
<img width="960" alt="ss3" src="https://user-images.githubusercontent.com/63870995/212375709-9cc6fe3f-0307-449d-b125-8edaf6fe6119.png">
<img width="960" alt="ss4" src="https://user-images.githubusercontent.com/63870995/212375785-217f5b33-670a-4010-81a5-7674463078e5.png">


