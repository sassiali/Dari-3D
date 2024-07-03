package tn.esprit.dari3d.services;

import tn.esprit.dari3d.Entities.Project;

import java.util.List;

public interface IProjectService {
  Project createProject(Project project);
  Project getProjectById(Long id);
  List<Project> getAllProjects();
  Project updateProject(Project project);
  void deleteProject(Long id);
}
