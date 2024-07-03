package tn.esprit.dari3d.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.dari3d.Entities.Project;
import tn.esprit.dari3d.repositories.ProjectRepository;
import tn.esprit.dari3d.services.IProjectService;

import java.util.List;

@Service
public class ProjectService implements IProjectService {

  @Autowired
  private ProjectRepository projectRepository;

  @Override
  public Project createProject(Project project) {
    return projectRepository.save(project);
  }

  @Override
  public Project getProjectById(Long id) {
    return projectRepository.findById(id).orElse(null);
  }

  @Override
  public List<Project> getAllProjects() {
    return projectRepository.findAll();
  }

  @Override
  public Project updateProject(Project project) {
    return projectRepository.save(project);
  }

  @Override
  public void deleteProject(Long id) {
    projectRepository.deleteById(id);
  }
}
