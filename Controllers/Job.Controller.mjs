import JobsCollection from "../Models/Job.Model.mjs";

const deleteAJobCreatedByCurrentUser = async (req, res)=>{
  // query would be, find a document whose jobID is matching provided jobID and that Job is created by the provided user
  const query = {
    postedByUserID: req.body.userID,
    _id: req.body.jobID
  };
  const response = await JobsCollection.findOneAndDelete(query);
  console.log(response);
  if(!response){
    // unable to delete it
      res.status(404).json({
        success: false,
        message: "Not Found : Unable to Delete It"
      });
      return;    
  }

  res.json({
    success: true,
    message: `Successfully Deleted Job ${query._id}`
  });

  
}

const updateAJobCreatedByCurrentUser = async (req, res)=>{
  // query would be, find a document whose jobID is matching provided jobID and that Job is created by the provided user
  const query = {
    postedByUserID: req.body.userID,
    _id: req.body._id
  };
  const updatedData = {
    "jobTitle": req.body.jobTitle,  
    "companyName": req.body.companyName,  
    "role": req.body.role,  
    "location": req.body.location,  
    "jobDescription": req.body.jobDescription,  
    "ctc":req.body.ctc,  
    "keywords": req.body.keywords,  
    "currency": req.body.currency ,
    "lastUpdatedOn": new Date()
  };

  const response = await JobsCollection.updateOne(query, updatedData);
  console.log(response);
  if(!response){
    // unable to delete it
      res.status(500).json({
        success: false,
        message: "Unable to Update It"
      });
      return;    
  }

  res.json({
    success: true,
    message: `Successfully Updated Job ${query._id}`
  });
  
}

const getAllTheJobs = async (req, res)=>{
  console.log('req received get all the jobs!');
  try {
    // ask db are there any urls created by current user ?
    const response =  await JobsCollection.find();
    if(response.length===0){
      res.status(404).json({
        success: false,
        message: "No Jobs Found!"
      });
      return;
    }
  
    // console.log(sanitizedResponse);
    res.json({
      success: true,
      body: response
    });
  } catch (error) {
    res.status(500).json({
      success: false,                    
      message: 'Failed to Fetch Jobs! please try again after some time...'
    });
    return;    
  }


}

async function helperWriteJobToDB(JobsCollection, jsonData){
  try {    
    // creating a document having job data
      let jobDocument = new JobsCollection(jsonData);
    // saving it to db
     jobDocument.save();
  
    // return job document
      return jobDocument;
  } catch (error) {
    throw error;
  }
}

const createAJob = async (req, res)=>{
  try {
    // console.log('req received !');
    // fetching data
      const jsonData = req.body;
  
    // computing unique job ID, UserID and postedOn     
      jsonData.postedByUserID = req.body.userID; // it will be automatically provided by our auth middleware
      jsonData.postedOn = new Date();   
      jsonData.lastUpdatedOn = new Date();   
  
      // just write to db
          const jobDocument = await helperWriteJobToDB(JobsCollection,  jsonData);
          // send response back to client
          res.json({
            success: true,                    
            jobID: jobDocument._id
          });
  } catch (error) {
    res.status(500).json({
      success: false,                    
      message: 'Failed to Create a Job ! please try again after some time...'
    });
    return;
  }


}


const JobController = {
  deleteAJobCreatedByCurrentUser,
  updateAJobCreatedByCurrentUser,
  getAllTheJobs,
  createAJob

};

export default JobController;