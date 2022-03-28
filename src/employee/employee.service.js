const employee = require('./employee.model')

module.exports.createPost = async  (post) => {
    return employee.create(post);
  };

module.exports.getPosts = async () => {
    return employee.find({})
};
module.exports.getPostById = async (employeeId) => {
    return employee.findById(employeeId)
}
module.exports.updateEmployeeById = async  (employeeId, update)=> {
    return employee.findByIdAndUpdate(employeeId, update, { new: true });
  };
module.exports.deleteEmployeeById  = async (employeeId) => {
    return employee.findByIdAndDelete(employeeId)
}