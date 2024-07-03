package tn.esprit.dari3d.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.dari3d.Entities.Category;
import tn.esprit.dari3d.Entities.Material;
import tn.esprit.dari3d.Entities.Users;
import tn.esprit.dari3d.repositories.CategoryRepository;
import tn.esprit.dari3d.repositories.MaterialRepository;
import tn.esprit.dari3d.repositories.UsersRepository;
import tn.esprit.dari3d.services.IMaterialService;

import java.util.List;

@Service
public class MaterialService implements IMaterialService {

  @Autowired
  private MaterialRepository materialRepository;
  @Autowired
  private CategoryRepository categoryRepository;
  @Autowired
  private UsersRepository usersRepository;
  public List<Material> getAllMaterials() {
    return materialRepository.findAll();
  }

  public Material getMaterialById(Long id) {
    return materialRepository.findById(id).orElse(null);
  }

  public Material createMaterial(Material material , Long idUser, Long idCategory) {
    Category category = categoryRepository.findById(idCategory)
      .orElseThrow(() -> new RuntimeException("Category not found"));
    material.setCategory(category);
    Users users = usersRepository.findById(idUser)
      .orElseThrow(() -> new RuntimeException("User not found"));
    return materialRepository.save(material);
  }

  public Material updateMaterial(Material material) {
    return materialRepository.save(material);
  }

  public void deleteMaterial(Long id) {
    materialRepository.deleteById(id);
  }
}
