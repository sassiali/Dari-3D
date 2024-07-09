package tn.esprit.dari3d.services;

import org.springframework.web.multipart.MultipartFile;
import tn.esprit.dari3d.Entities.PicturesOfDoneProjects;

import java.io.IOException;
import java.util.List;

public interface IPicturesOfDoneProjectsService {

  PicturesOfDoneProjects createPicturesOfDoneProjects(PicturesOfDoneProjects picturesOfDoneProjects);

  PicturesOfDoneProjects getPicturesOfDoneProjectsById(Long id);

  List<PicturesOfDoneProjects> getAllPicturesOfDoneProjects();

  PicturesOfDoneProjects updatePicturesOfDoneProjects(PicturesOfDoneProjects picturesOfDoneProjects);

  void deletePicturesOfDoneProjects(Long id);

  void uploadImage(PicturesOfDoneProjects picturesOfDoneProjects, MultipartFile file) throws IOException;

}
