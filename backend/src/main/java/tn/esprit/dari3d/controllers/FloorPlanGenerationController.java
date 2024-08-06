package tn.esprit.dari3d.controllers;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import tn.esprit.dari3d.services.FloorPlanGenerationService;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Base64;
import org.springframework.core.io.InputStreamResource;
import java.io.ByteArrayInputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;


@RestController
@RequestMapping("/api/floorplan")
public class FloorPlanGenerationController {

  private final FloorPlanGenerationService floorPlanGenerationService;

  public FloorPlanGenerationController(FloorPlanGenerationService floorPlanGenerationService) {
    this.floorPlanGenerationService = floorPlanGenerationService;
  }




  @PostMapping("/generateAndConvert")
  public ResponseEntity<byte[]> generateAndConvertFloorPlan(@RequestBody String description) {
    try {
      BufferedImage floorPlanImage = floorPlanGenerationService.generateFloorPlan(description);
      BufferedImage floorPlanImage3D = floorPlanGenerationService.convert2Dto3D(floorPlanImage);

      ByteArrayOutputStream baos2D = new ByteArrayOutputStream();
      ImageIO.write(floorPlanImage, "png", baos2D);

      ByteArrayOutputStream baos3D = new ByteArrayOutputStream();
      ImageIO.write(floorPlanImage3D, "png", baos3D);

      // Create a ByteArrayOutputStream to hold the zip
      ByteArrayOutputStream baosZip = new ByteArrayOutputStream();
      ZipOutputStream zos = new ZipOutputStream(baosZip);

      // Add the 2D image to the zip
      ZipEntry entry2D = new ZipEntry("2DImage.png");
      zos.putNextEntry(entry2D);
      zos.write(baos2D.toByteArray());
      zos.closeEntry();

      // Add the 3D image to the zip
      ZipEntry entry3D = new ZipEntry("3DImage.png");
      zos.putNextEntry(entry3D);
      zos.write(baos3D.toByteArray());
      zos.closeEntry();

      // Finish zip creation
      zos.close();

      HttpHeaders headers = new HttpHeaders();
      headers.setContentType(MediaType.parseMediaType("application/zip"));
      headers.setContentDisposition(ContentDisposition.builder("attachment").filename("images.zip").build());

      return new ResponseEntity<>(baosZip.toByteArray(), headers, HttpStatus.OK);
    } catch (IOException e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    } catch (RuntimeException e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }
}
