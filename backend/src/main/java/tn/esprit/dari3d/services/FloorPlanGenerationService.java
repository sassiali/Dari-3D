package tn.esprit.dari3d.services;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Collections;
@Service
public class FloorPlanGenerationService {

  private static final String HUGGING_FACE_API = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5";
  private static final String API_KEY = "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";

  public BufferedImage generateFloorPlan(String description) {
    RestTemplate restTemplate = new RestTemplate();

    // Create headers
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
    headers.set("Authorization", "Bearer " + API_KEY);

    // Create request
    HttpEntity<String> request = new HttpEntity<>("{\"inputs\":\"" + description + "\"}", headers);

    // Make a POST request
    ResponseEntity<byte[]> response = restTemplate.postForEntity(HUGGING_FACE_API, request, byte[].class);

    // Check the response status code and return the body if it's 200
    if (response.getStatusCode() == HttpStatus.OK) {
      byte[] imageBytes = response.getBody();

      // Convert the byte array into a BufferedImage
      try {
        BufferedImage image = ImageIO.read(new ByteArrayInputStream(imageBytes));
        return image;
      } catch (IOException e) {
        throw new RuntimeException("Failed to read the image.", e);
      }
    } else {
      throw new RuntimeException("Failed to generate floor plan: " + response.getStatusCode());
    }
  }

  public BufferedImage convert2Dto3D(BufferedImage image2D) {
    // Create a new image that will hold the 3D version
    BufferedImage image3D = new BufferedImage(image2D.getWidth(), image2D.getHeight(), image2D.getType());

    // Apply some transformation to the 2D image to create the 3D effect
    // This is just a placeholder - you'll need to replace this with your actual 3D conversion code
    for (int y = 0; y < image2D.getHeight(); y++) {
      for (int x = 0; x < image2D.getWidth(); x++) {
        int pixel = image2D.getRGB(x, y);
        // Apply some transformation to the pixel here
        image3D.setRGB(x, y, pixel);
      }
    }

    return image3D;
  }
}
