package tn.esprit.dari3d.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.dari3d.Entities.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
