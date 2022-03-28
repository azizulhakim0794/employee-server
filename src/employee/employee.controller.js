const employeeService = require('./employee.service')

module.exports.createPost = async function (req, res) {
    const post = req.body
    const createControlPost = await employeeService.createPost(post)
    return res.status(201).json(createControlPost)
}
module.exports.getPosts = async function (req, res) {
    const posts = await employeeService.getPosts();
    return res.json(posts);
  };
module.exports.getPostById = async function (req, res) {
    const employeeId = req.params.id
    const post = await employeeService.getPostById(employeeId)
    if (post){
        return res.status(201).json(post);
    }
    else{
        return res.status(400).json({errors: [{msg: "this method not work in this time" }] })
    }
}
module.exports.updateEmployeeById = async function (req, res) {
    const employeeId = req.params.id;
    const update = req.body;
    const post = await employeeService.updateEmployeeById(employeeId, update);
    if (post){
        return res.status(202).json(post);
    }
    else{
        return res.status(400).json({errors: [{msg: "this method not work in this time" }] })
    }
};
module.exports.deleteEmployeeById = async function (req, res) {
    const employeeId = req.params.id;
    const post = await employeeService.deleteEmployeeById(employeeId);
    if (post){
        return res.status(200).json(post);
    }
    else{
        return res.status(400).json({errors: [{msg: "this method not work in this time" }] })
    }
};
