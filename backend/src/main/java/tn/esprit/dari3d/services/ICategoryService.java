package tn.esprit.dari3d.services;

import tn.esprit.dari3d.Entities.Category;
import java.util.List;

public interface ICategoryService {
  List<Category> getAllCategories();
  Category getCategoryById(Long id);
  Category createCategory(Category category);
  Category updateCategory(Category category);
  void deleteCategory(Long id);

}
