const bid = require('../model/Biding');
const AssigJOb = require('../model/AssignJob');

exports.AssignJOB = async (req, res) => {
  console.log('sdsdsdsdsdsdsdsdsd');
  const Data = req.body;

  try {
    const JOBAssign = await AssigJOb.create(Data);

    const datatobeupdate = {JObStatus: 'Assignd'};
    const UpdateJOBSTATUS = await bid.findByIdAndUpdate(req.body.JobID, {
      $set: datatobeupdate,
    });

    res.status(200).send({Message: 'Job Assign Sucessfull', data: JOBAssign});
  } catch (error) {
    res.status(400).send({Message: 'Not Able to Assign Job', data: error});
  }
};

exports.getAssigedjobbyFreelancer = async (req, res) => {
  const Id = req.params.id;

  try {
    console.log(Id);
    const freelancerId = {JobAssigntoUSerID: Id};

    const sendData = await AssigJOb.find(freelancerId);

    res.status(200).send({Message: 'Fetched Assign Jobs', data: sendData});
  } catch (error) {
    res
      .status(400)
      .send({Message: 'Not Able to Find Any Assign Job', data: error});
  }
};
