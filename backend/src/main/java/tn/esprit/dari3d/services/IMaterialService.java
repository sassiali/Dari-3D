package tn.esprit.dari3d.services;

import tn.esprit.dari3d.Entities.Material;
import java.util.List;

public interface IMaterialService {
  List<Material> getAllMaterials();
  Material getMaterialById(Long id);
  Material createMaterial(Material material, Long idUser, Long idCategory);
  Material updateMaterial(Material material);
  void deleteMaterial(Long id);
}
