# Implementation of SWAPI SERVERLESS CHALLENGE

## **Usage**

### **Technologies**
1. [NodeJs V20](https://nodejs.org/es)
2. [TypeScript](https://www.typescriptlang.org/)
3. [DynamoDB](https://aws.amazon.com/es/dynamodb/)
4. [Serverless V4](https://www.serverless.com/)
4. [Jest](https://jestjs.io/)

### **Steps for local development**
1. Install dependencies
```
npm install
```
2. Install Dynamodb local
```
npm run dynamodb:local:install
```
3. Start local server
```
npm run dev
```

### **Extra commands**
1. Run unit test
```
npm run test
```
2. Run coverage unit test
```
npm run test:cov
```
3. Run linter
```
npm run lint:fix
```

## API Endpoints

List of available routes:

**Routes**:\
`GET /vehicle/{vehicleId}` - Retrieve details of a specific vehicle.\
`GET /vehicle` - Retrieve a list of all vehicles.\
`POST /vehicle` - Adds a new vehicle to the database.

- comments: OPEN API documentation is located in the archive
**open-api-documentation.yml**

