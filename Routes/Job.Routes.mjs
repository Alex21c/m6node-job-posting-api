/**
 * 
 * Job ROUTES
 * 
 * 1. Create a Job
 *    POST api/v1/job/create-job
 *    REQUEST:
 *      {
 *         jobTitle : {type: String, required: true},
 *         companyName : {type: String, required: true},
 *         role : {type: String, required: true},
 *         location : {type: String, required: true},
 *         jobDescription : {type: String, required: true},
 *         ctc : {type: Number, required: true},
 *         keywords : {type: String, required: true},
 *         currency : {type: Number, required: true},
 *      }
 *    RESPONSE:
 *     {
 *      'success' : true  
 *      'jobID'  : String unique job id
 *     }
 *     {
 *      'success' : false 
 *      'message' : failure message message
 *     }
 * 
 * 2. Gets all the Jobs
 *    GET api/v1/job/get-jobs
 *    RESPONSE:
 *    it will return array of all the job objects
 * 
 * 3. Update Jobs
 *    PUT api/v1/job/update-job
 *    REQUEST: 
 *      {
 *        jobID : String
 *      }
 *    RESPONSE:
 *      {
 *       'success' : true | false 
 *        'message' : String success message or error 
 *      }
 * 
 * 4. Delete Job
 *  a. what would be the request method and api end point?
 *    DELETE api/v1/job/delete-job 
 *    REQUEST: 
 *      {
 *        jobID : String
 *      }
 *    RESPONSE:
 *      {
 *       'success' : true | false 
 *       'message' : String success message or error 
 *      }
 * 
 */

import express from 'express';
import JobController from '../Controllers/Job.Controller.mjs';
import AuthenticateUser from '../Middlewares/AuthenticateUser.Middleware.mjs';
// console.log(JobController)

const JobRoutes = express.Router();

JobRoutes.post('/create-job', AuthenticateUser, JobController.createAJob);
JobRoutes.get('/get-jobs',  JobController.getAllTheJobs);
JobRoutes.put('/update-job', AuthenticateUser, JobController.updateAJobCreatedByCurrentUser);
JobRoutes.delete('/delete-job', AuthenticateUser, JobController.deleteAJobCreatedByCurrentUser);


export default JobRoutes;