import * as dao from "./dao.js";
function ModuleRoutes(app) {
  const findModulesByCourseId = async (req, res) => { 
    const modules = await dao.findModulesByCourseId(req.params.courseId);
    res.json(modules);
  };
  const updateModule = async (req, res) => { 
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  const deleteModule = async (req, res) => { 
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };
  const createModule = async (req, res) => {
    let module = await dao.findModuleById(req.body.id);
    if (module) {
      res.status(400).json(
        { message: "Module ID already taken" });
    }
    else {
      const { courseId } = req.params;
      module = await dao.createModule(courseId, req.body);
      res.json(module);
    }
  };
  const findAllModules = async (req, res) => { 
    const modules = await dao.findAllModules();
    res.json(modules);
  };


  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.post("/api/courses/:courseId/modules", createModule);
  app.get("/api/courses/:courseId/modules", findModulesByCourseId);
  app.get("/api/modules", findAllModules)
}
export default ModuleRoutes;