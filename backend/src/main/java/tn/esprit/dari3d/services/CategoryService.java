package tn.esprit.dari3d.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.dari3d.Entities.Category;

import tn.esprit.dari3d.repositories.CategoryRepository;
import tn.esprit.dari3d.repositories.MaterialRepository;
import tn.esprit.dari3d.services.ICategoryService;

import java.util.List;

@Service
public class CategoryService  implements ICategoryService {

  @Autowired
  private CategoryRepository categoryRepository;
  @Autowired
  private MaterialRepository materialRepository;

  public List<Category> getAllCategories() {
    return categoryRepository.findAll();
  }

  public Category getCategoryById(Long id) {
    return categoryRepository.findById(id).orElse(null);
  }

  public Category createCategory(Category category) {
    return categoryRepository.save(category);
  }

  public Category updateCategory(Category category) {
    return categoryRepository.save(category);
  }

  public void deleteCategory(Long id) {
    Category category = categoryRepository.findById(id)
      .orElseThrow(() -> new RuntimeException("Category not found"));
    materialRepository.deleteAll(category.getMaterials());
    categoryRepository.deleteById(id);
  }

}
