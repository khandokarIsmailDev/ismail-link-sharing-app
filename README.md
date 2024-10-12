# How to Run This Project

![Structure](./structure.png)

1. Clone the Repository: First, clone the repository to your local machine. Open your terminal and run:
```js
git clone https://github.com/khandokarIsmailDev/ismail-link-sharing-app.git
cd ismail-link-sharing-app
```

2. Install Node.js: Make sure you have Node.js installed on your computer. You can download it from nodejs.org. Check the installation by running:
```js
node -v
npm -v
```

3. Install Dependencies: Since the node_modules directory is not present, you need to install the project dependencies. Run the following command in your project directory:
```js
npm install
```

4. Create an .env File: If the project requires environment variables, create a new .env file in the root of your project. You can do this by running:
```js
touch .env
```

5. Open the `.env` file in a text editor and add any necessary environment variables:
```js
DATABASE_URL="mysql://avnadmin:AVNS_s9VFh9_IOsmNTO5wbBT@mysql-2ac98fb9-kawsar111ws-55c4.l.aivencloud.com:22026/defaultdb?ssl-mode=REQUIRED"
```

6. Run Prisma Migrations: Execute the following command:

```js
npx prisma migrate dev
```


7. Run the Development Server: After installing dependencies and configuring the environment variables, you can start the development server by running:
```js
npm run dev
```

8. Access the Application: Open your web browser and go to http://localhost:3000 to see your Next.js application running.


# vercel live link 
- https://ismail-link-sharing-app.vercel.app/
