package tn.esprit.dari3d.controllers;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import tn.esprit.dari3d.services.FloorPlanGenerationService;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

@RestController
@RequestMapping("/api/floorplan")
public class FloorPlanGenerationController {

  private final FloorPlanGenerationService  floorPlanGenerationService;

  public FloorPlanGenerationController(FloorPlanGenerationService floorPlanGenerationService) {
    this.floorPlanGenerationService = floorPlanGenerationService;
  }

  @PostMapping("/generate")
  public ResponseEntity<byte[]> generateFloorPlan(@RequestBody String description) {
    try {
      BufferedImage floorPlanImage = floorPlanGenerationService.generateFloorPlan(description);

      ByteArrayOutputStream baos = new ByteArrayOutputStream();
      ImageIO.write(floorPlanImage, "png", baos);
      byte[] imageInByte = baos.toByteArray();

      return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(imageInByte);
    } catch (IOException e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    } catch (RuntimeException e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }
}
