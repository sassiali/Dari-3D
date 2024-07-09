package tn.esprit.dari3d.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.dari3d.Entities.PicturesOfDoneProjects;
import tn.esprit.dari3d.repositories.PicturesOfDoneProjectsRepository;
import tn.esprit.dari3d.services.IPicturesOfDoneProjectsService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class PicturesOfDoneProjectsService implements IPicturesOfDoneProjectsService {

  @Autowired
  private PicturesOfDoneProjectsRepository picturesOfDoneProjectsRepository;

  @Override
  public PicturesOfDoneProjects createPicturesOfDoneProjects(PicturesOfDoneProjects picturesOfDoneProjects) {
    return picturesOfDoneProjectsRepository.save(picturesOfDoneProjects);
  }

  @Override
  public PicturesOfDoneProjects getPicturesOfDoneProjectsById(Long id) {
    return picturesOfDoneProjectsRepository.findById(id).orElse(null);
  }

  @Override
  public List<PicturesOfDoneProjects> getAllPicturesOfDoneProjects() {
    return picturesOfDoneProjectsRepository.findAll();
  }

  @Override
  public PicturesOfDoneProjects updatePicturesOfDoneProjects(PicturesOfDoneProjects picturesOfDoneProjects) {
    return picturesOfDoneProjectsRepository.save(picturesOfDoneProjects);
  }

  @Override
  public void deletePicturesOfDoneProjects(Long id) {
    picturesOfDoneProjectsRepository.deleteById(id);
  }

  @Override
  public void uploadImage(PicturesOfDoneProjects picturesOfDoneProjects, MultipartFile file) throws IOException {
    String folder = "/images/";
    byte[] bytes = file.getBytes();
    Path path = Paths.get(folder + file.getOriginalFilename());

    // Création du dossier s'il n'existe pas déjà
    Files.createDirectories(path.getParent());

    Files.write(path, bytes);
    picturesOfDoneProjects.setPicturePath(path.toString());
    picturesOfDoneProjectsRepository.save(picturesOfDoneProjects);
  }
}
