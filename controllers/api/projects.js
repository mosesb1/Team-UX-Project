const Project = require('../../models/Project')
//get 

const getProject = (req,res)=>{
    Project.find({}, (err, foundProject) => {
        if (!err) {
          res.status(200).json(foundProject)
        } else {
          res.status(400).json(err)
        }
      })
}

// get all projects from user

const getUserProjects = (req,res) => {
  Project.find({$or: [{organizer: req.params.userId},{"collaborators.userId": req.params.userId}]},(err, foundProjects) => {
    if(err){
      res.status(400).json(err);
    } else {
      res.status(200).json(foundProjects)
    }
  })
}
//set project

const setProject = async (req,res)=>{
    try {
        const { body } = req
        const createdProject = await Project.create(body)
        res.status(200).json({ message: "Item Created!", createdProject })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}


//get Project

const updateProject= (req,res)=>{
    const {body} = req 
    Project.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedProject) => {
        if (!err) {
          res.status(200).json(updatedProject)
        } else {
          res.status(400).json(err)
        }
      })
}
//getProject

const deleteProject = (req,res)=>{
    Project.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted project"})
          } else {
            res.status(400).json(err)
          }
    })
}

const showProject= (req,res)=>{
    Project.findById(req.params.id, (err, projects)=>{
        if (!err) {
            res.status(200).json({message:'showing the project', projects})
          } else {
            res.status(400).json(err)
          }
    })
}

module.exports = {
    getProject,
    getUserProjects,
    setProject,
    updateProject,
    deleteProject,
    showProject 
}