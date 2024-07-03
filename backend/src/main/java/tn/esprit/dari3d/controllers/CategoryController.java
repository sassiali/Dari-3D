package tn.esprit.dari3d.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.dari3d.Entities.Category;
import tn.esprit.dari3d.Services.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

  @Autowired
  private CategoryService categoryService;

  @GetMapping("/getAllCategories")
  public List<Category> getAllCategories() {
    return categoryService.getAllCategories();
  }

  @GetMapping("/{id}")
  public Category getCategoryById(@PathVariable Long id) {
    return categoryService.getCategoryById(id);
  }

  @PostMapping("/createCategory")
  public Category createCategory(@RequestBody Category category) {
    return categoryService.createCategory(category);
  }

  @PutMapping("/updateCategory")
  public Category updateCategory(@RequestBody Category category) {
    return categoryService.updateCategory(category);
  }

  @DeleteMapping("/{id}")
  public void deleteCategory(@PathVariable Long id) {
    categoryService.deleteCategory(id);
  }
}
