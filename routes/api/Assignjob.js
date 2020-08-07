module.exports = (app) => {
  const Assigjobcontroller = require('../../controller/AssignJobcontroller');

  app.post('/api/assignjob', Assigjobcontroller.AssignJOB);
  app.get(
    '/api/assignjob/freelancer/:id',
    Assigjobcontroller.getAssigedjobbyFreelancer
  );
};
