# Job Posting API
![](thumbnail.png)

## Objectives
Created a JOB Posting API with following CRUD operations:
1. Create a Job
2. Gets all the Jobs
3. Update Job
4. Delete Job

## Key features:
+ MVC Framework was used to built the application
+ MongoDB as backend Database 
+ ExpressJS for Server Implementation
+ NodeJS for BackEnd
+ ReactJS for FrontEnd

## .env file
```javascript
USER_SESSION_EXPIRES_AFTER="2 days"
PORT=4000
PRIVATE_KEY= Create your own private key any random plain text will work, used for hashing passwords
MONGODB_CONNECTION_STRING= get it from Yours MongoDB Atlas account (https://cloud.mongodb.com/)
```
### Note: 
in this project i have created a database named ```m6node-job-posting-project``` and specify it in 
the MongoDB Connection string inside .env 
```javascript
<abcStringGenertedByMongoDB>mongodb.net/m6node-job-posting-project?retryWrites=true<xyzStringGenertedByMongoDB>
```

## To specify custom expiration values of session
```javascript
'2 days'  // 172800000
'1d'      // 86400000
'10h'     // 36000000
'2.5 hrs' // 9000000
'2h'      // 7200000
'1m'      // 60000
'5s'      // 5000
'1y'      // 31557600000
```

## How to install and run in yours local machine
```bash
npm install
npm run start
```

## Postman API Endpoints file
[Postman API Endpoints.json](m6node-job-application-api.postman_collection.json)

## API End Points : User
### 1. Sign Up
```
POST /api/v1/user/sign-up
```
#### REQUEST
```javascript
{
	email: String email address of user
	password: String Hashed password for sign-in
	firstName : String first name of user
	lastName : String last name of user
}
```
#### RESPONSE
```javascript
{
    "success": true,
    "message": "User Account created successfully !",
    "auth-token": "JWT Auth Token"
}
```
### 2. Sign In
```
POST /api/v1/user/sign-in
```
#### REQUEST
```javascript
{
 email: String email address of user
 password: String Hashed password for sign-in
}
```
#### RESPONSE
```javascript
{
    "success": true,
    "message": "JWT Auth Token"
}

```
### 3. Validate Auth Token
```
POST /api/v1/user/validate-auth-token
```
#### REQUEST
```javascript
Headers
{ auth-token : JWT Auth Token as received after sign in or up}
```
#### RESPONSE
```javascript
{
    "isAuthTokenValid": true
}
```

## API End Points : Job
### 1. Create a Job
```
POST api/v1/job/create-job
```
#### REQUEST
```javascript
{
   jobTitle : {type: String, required: true},
   companyName : {type: String, required: true},
   role : {type: String, required: true},
   location : {type: String, required: true},
   jobDescription : {type: String, required: true},
   ctc : {type: Number, required: true},
   keywords : {type: String, required: true},
   currency : {type: Number, required: true},
}
```
#### RESPONSE
```javascript
{
 'success' : true  
 'jobID'  : String unique job id
}
{
 'success' : false 
 'message' : failure message message
}
```
### 2. Gets all the Jobs
```
GET api/v1/job/get-jobs
```
#### REQUEST

#### RESPONSE
it will return array of all the job objects

### 3. Update Jobs
```
POST api/v1/job/create-job
```
#### REQUEST
```javascript
{
  jobID : String
}
```
#### RESPONSE
```javascript
{
 'success' : true | false 
 'message' : String success message or error 
}
```

### 4. Delete Job
```javascript
DELETE api/v1/job/delete-job 
```
#### REQUEST
```javascript
{
  jobID : String
}
```
#### RESPONSE
```javascript
{
 'success' : true | false 
 'message' : String success message or error 
}
```




## Tech. Stack Used:
+ [MongoDB](https://www.mongodb.com/) 
+ [ExpressJS](https://expressjs.com/) 
+ [ReactJS](https://react.dev/) 
+ [NodeJS](https://nodejs.org/en/) 


## Author
[Abhishek kumar](https://www.linkedin.com/in/alex21c/), ([Geekster](https://geekster.in/) MERN Stack FS-14 Batch)


