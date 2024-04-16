import model from "./model.js";
export const createModule = (courseId, moduleData) => {
  delete moduleData._id
  delete moduleData.course
  const newModule = {
    ...moduleData,
    course: courseId,
  }
  return model.create(newModule);
}
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findOne({id: moduleId});
export const findModulesByCourseId = (courseId) => model.find({ course: courseId});
export const updateModule = (moduleId, module) =>  model.updateOne({ id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ id: moduleId });