package tn.esprit.dari3d.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.dari3d.Entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
