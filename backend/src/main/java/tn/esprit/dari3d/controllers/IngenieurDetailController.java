package tn.esprit.dari3d.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.dari3d.Entities.IngenieurDetail;
import tn.esprit.dari3d.services.IngenieurDetailService;

import java.util.List;

@RestController
@RequestMapping("/ingenieurDetails")
public class IngenieurDetailController {

  @Autowired
  private IngenieurDetailService ingenieurDetailService;

  @PostMapping("/createIngenieurDetail")
  public IngenieurDetail createIngenieurDetail(@RequestBody IngenieurDetail ingenieurDetail) {
    return ingenieurDetailService.createIngenieurDetail(ingenieurDetail);
  }

  @GetMapping("/getby{id}")
  public IngenieurDetail getIngenieurDetailById(@PathVariable Long id) {
    return ingenieurDetailService.getIngenieurDetailById(id);
  }

  @GetMapping("/getAllIngenieurDetails")
  public List<IngenieurDetail> getAllIngenieurDetails() {
    return ingenieurDetailService.getAllIngenieurDetails();
  }

  @PutMapping("/updateIngenieurDetail")
  public IngenieurDetail updateIngenieurDetail(@RequestBody IngenieurDetail ingenieurDetail) {
    return ingenieurDetailService.updateIngenieurDetail(ingenieurDetail);
  }

  @DeleteMapping("/Delete{id}")
  public void deleteIngenieurDetail(@PathVariable Long id) {
    ingenieurDetailService.deleteIngenieurDetail(id);
  }
}
