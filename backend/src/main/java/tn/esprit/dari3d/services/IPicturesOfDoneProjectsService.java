package tn.esprit.dari3d.services;

import tn.esprit.dari3d.Entities.PicturesOfDoneProjects;

import java.util.List;

public interface IPicturesOfDoneProjectsService {
  PicturesOfDoneProjects createPicturesOfDoneProjects(PicturesOfDoneProjects picturesOfDoneProjects);
  PicturesOfDoneProjects getPicturesOfDoneProjectsById(Long id);
  List<PicturesOfDoneProjects> getAllPicturesOfDoneProjects();
  PicturesOfDoneProjects updatePicturesOfDoneProjects(PicturesOfDoneProjects picturesOfDoneProjects);
  void deletePicturesOfDoneProjects(Long id);
}
