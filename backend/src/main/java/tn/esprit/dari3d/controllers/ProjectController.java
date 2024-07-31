package tn.esprit.dari3d.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.dari3d.Entities.Project;
import tn.esprit.dari3d.services.IProjectService;

import java.util.List;

@RestController
@RequestMapping("/projects")
public class ProjectController {

  @Autowired
  private IProjectService projectService;


  @PostMapping("/create")
  public Project createProject(@RequestBody Project project) {
    return projectService.createProject(project);
  }

  @GetMapping("/getBy{id}")
  public Project getProjectById(@PathVariable Long id) {
    return projectService.getProjectById(id);
  }

  @GetMapping("/getAll")
  public List<Project> getAllProjects() {
    return projectService.getAllProjects();
  }

  @PutMapping("/update")
  public Project updateProject(@RequestBody Project project) {
    return projectService.updateProject(project);
  }

  @DeleteMapping("/DeleteBy{id}")
  public void deleteProject(@PathVariable Long id) {
    projectService.deleteProject(id);
  }


}
