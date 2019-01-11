# Get Your REST API Server Sandbox

This project uses a hosted database that has writes disabled. Follow these steps to set up your own demo database that lets you perform database writes:

### 1. Fork the CodeSandbox

To get your own version of this sandbox, click the **Fork** button in the top-left corner:

![](https://imgur.com/aTCEfuD.png)

### 2. Open new Terminal tab

Once the forking succeeded and you have your own version of the sandbox available, you can open a new terminal tab by clicking the little **+** button:

![](https://imgur.com/iWwZ1yD.png)

### 3. Deploy datamodel & re-generate Prisma client

The next step connects the Prisma client with a fresh demo database that will be set up for you. In the terminal, run: 

```
yarn prisma deploy
```

Then, follow these steps in the interactive CLI wizard:

1. Select **Demo server**
1. **Open the URL** that's printed by the CLI in your browser 
1. **Authenticate** with Prisma Cloud in your browser
1. Back in the CodeSandbox terminal, **confirm all suggested values**

After `prisma deploy` has terminated, the Prisma client in `src/generated/prisma-client` is re-generated. This means the REST API server is now connected to your own demo database.

### 4. Explore the Prisma client API

Run the following command to start exploring:

```
yarn start
```

### 5. Using the REST API

#### `GET`

- `/post/:id`: Fetch a single post by its `id`
- `/feed`: Fetch all _published_ posts
- `/filterPosts?searchString={searchString}`: Filter posts by `title` or `content`

#### `POST`

- `/post`: Create a new post
  - Body:
    - `title: String` (required): The title of the post
    - `content: String` (optional): The content of the post
    - `authorEmail: String` (required): The email of the user that creates the post
- `/user`: Create a new user
  - Body:
    - `email: String` (required): The email address of the user
    - `name: String` (optional): The name of the user

#### `PUT`

- `/publish/:id`: Publish a post by its `id`

#### `DELETE`
  
- `/post/:id`: Delete a post by its `id`
