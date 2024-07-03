package tn.esprit.dari3d.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.dari3d.Entities.PicturesOfDoneProjects;
import tn.esprit.dari3d.services.IPicturesOfDoneProjectsService;

import java.util.List;

@RestController
@RequestMapping("/picturesOfDoneProjects")
public class PicturesOfDoneProjectsController {

  @Autowired
  private IPicturesOfDoneProjectsService picturesOfDoneProjectsService;

  @PostMapping("/createPicturesOfDoneProjects")
  public PicturesOfDoneProjects createPicturesOfDoneProjects(@RequestBody PicturesOfDoneProjects picturesOfDoneProjects) {
    return picturesOfDoneProjectsService.createPicturesOfDoneProjects(picturesOfDoneProjects);
  }

  @GetMapping("/GetBy{id}")
  public PicturesOfDoneProjects getPicturesOfDoneProjectsById(@PathVariable Long id) {
    return picturesOfDoneProjectsService.getPicturesOfDoneProjectsById(id);
  }

  @GetMapping("/getAllPicturesOfDoneProjects")
  public List<PicturesOfDoneProjects> getAllPicturesOfDoneProjects() {
    return picturesOfDoneProjectsService.getAllPicturesOfDoneProjects();
  }

  @PutMapping("/updatePicturesOfDoneProjects")
  public PicturesOfDoneProjects updatePicturesOfDoneProjects(@RequestBody PicturesOfDoneProjects picturesOfDoneProjects) {
    return picturesOfDoneProjectsService.updatePicturesOfDoneProjects(picturesOfDoneProjects);
  }

  @DeleteMapping("/deleteBy{id}")
  public void deletePicturesOfDoneProjects(@PathVariable Long id) {
    picturesOfDoneProjectsService.deletePicturesOfDoneProjects(id);
  }
}
