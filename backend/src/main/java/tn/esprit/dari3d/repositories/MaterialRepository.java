package tn.esprit.dari3d.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.dari3d.Entities.Material;

public interface MaterialRepository extends JpaRepository<Material, Long> {
}
