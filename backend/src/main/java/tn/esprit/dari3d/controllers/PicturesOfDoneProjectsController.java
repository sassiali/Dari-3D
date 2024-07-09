package tn.esprit.dari3d.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import tn.esprit.dari3d.Entities.PicturesOfDoneProjects;
import tn.esprit.dari3d.services.IPicturesOfDoneProjectsService;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/picturesOfDoneProjects")
public class PicturesOfDoneProjectsController {

  @Autowired
  private IPicturesOfDoneProjectsService picturesOfDoneProjectsService;

  @PostMapping(value = "/createPicturesOfDoneProjects", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public PicturesOfDoneProjects createPicturesOfDoneProjects(@RequestParam("file") MultipartFile file) {
    try {
      PicturesOfDoneProjects picturesOfDoneProjects = new PicturesOfDoneProjects();

      // Chargement de l'image
      picturesOfDoneProjectsService.uploadImage(picturesOfDoneProjects, file);

      // Enregistrement de l'entité PicturesOfDoneProjects
      picturesOfDoneProjects = picturesOfDoneProjectsService.createPicturesOfDoneProjects(picturesOfDoneProjects);

      return picturesOfDoneProjects;
    } catch (Exception e) {
      e.printStackTrace();
      throw new RuntimeException("Failed to upload image", e);
    }
  }


  @GetMapping("/GetBy/{id}") // Correction ici
  public PicturesOfDoneProjects getPicturesOfDoneProjectsById(@PathVariable Long id) {
    return picturesOfDoneProjectsService.getPicturesOfDoneProjectsById(id);
  }

  @GetMapping("/getAllPicturesOfDoneProjects")
  public List<PicturesOfDoneProjects> getAllPicturesOfDoneProjects() {
    return picturesOfDoneProjectsService.getAllPicturesOfDoneProjects();
  }

  @PutMapping("/updatePicturesOfDoneProjects")
  public PicturesOfDoneProjects updatePicturesOfDoneProjects(@RequestBody PicturesOfDoneProjects picturesOfDoneProjects, @RequestParam("file") MultipartFile file) {
    picturesOfDoneProjects = picturesOfDoneProjectsService.updatePicturesOfDoneProjects(picturesOfDoneProjects);
    try {
      picturesOfDoneProjectsService.uploadImage(picturesOfDoneProjects, file);
    } catch (IOException e) {
      e.printStackTrace();
      // handle the exception
    }
    return picturesOfDoneProjects;
  }

  @DeleteMapping("/deleteBy/{id}") // Correction ici
  public void deletePicturesOfDoneProjects(@PathVariable Long id) {
    picturesOfDoneProjectsService.deletePicturesOfDoneProjects(id);
  }
}
