/**
 * ROUTES for User
 * POST /api/v1/user/sign-up
 * takes data using html form from user
 * {
 * email: String email address of user
 * password: String Hashed password for sign-in
 * firstName : String first name of user
 * lastName : String last name of user
 * }
 * 
 * POST /api/v1/user/sign-in
 * validate user by taking email and password 
 * {
 * email: String email address of user
 * password: String Hashed password for sign-in
 * }
 * 
 * 
 * POST /api/v1/user/validate-auth-token
 * headers { auth-token : the auth token}
 * 
 */
import express from 'express';
import UserController from '../Controllers/Users.Controller.mjs';
import AuthenticateUser from '../Middlewares/AuthenticateUser.Middleware.mjs';

const UserRoutes = express.Router();

UserRoutes.post('/sign-up', UserController.signUpUser);

UserRoutes.post('/sign-in', UserController.signInUser);

UserRoutes.post('/validate-auth-token', AuthenticateUser, UserController.validateAuthToken);


export default UserRoutes;