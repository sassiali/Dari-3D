package tn.esprit.dari3d.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.dari3d.Entities.Element;

public interface ElementRepository extends JpaRepository<Element, Long> {
}

