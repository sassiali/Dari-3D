package tn.esprit.dari3d.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.dari3d.Entities.Material;
import tn.esprit.dari3d.Services.MaterialService;

import java.util.List;

@RestController
@RequestMapping("/materials")
public class MaterialController {

  @Autowired
  private MaterialService materialService;

  @GetMapping("/getAllMaterials")
  public List<Material> getAllMaterials() {
    return materialService.getAllMaterials();
  }

  @GetMapping("/getBy{id}")
  public Material getMaterialById(@PathVariable Long id) {
    return materialService.getMaterialById(id);
  }

  @PostMapping("/createMaterial/{idU}/{id}")
  public Material createMaterial(@RequestBody Material material,@PathVariable("idU") Long idUser,@PathVariable("id") Long idCategory) {
    return materialService.createMaterial(material,idUser,idCategory);
  }

  @PutMapping("/updateMaterial")
  public Material updateMaterial(@RequestBody Material material) {
    return materialService.updateMaterial(material);
  }

  @DeleteMapping("/Delete{id}")
  public void deleteMaterial(@PathVariable Long id) {
    materialService.deleteMaterial(id);
  }
}
