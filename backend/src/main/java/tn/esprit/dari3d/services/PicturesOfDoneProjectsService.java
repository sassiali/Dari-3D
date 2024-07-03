package tn.esprit.dari3d.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.dari3d.Entities.PicturesOfDoneProjects;
import tn.esprit.dari3d.repositories.PicturesOfDoneProjectsRepository;
import tn.esprit.dari3d.services.IPicturesOfDoneProjectsService;

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
}
