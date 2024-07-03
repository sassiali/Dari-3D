package tn.esprit.dari3d.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.dari3d.Entities.IngenieurDetail;
import tn.esprit.dari3d.Entities.PicturesOfDoneProjects;
import tn.esprit.dari3d.repositories.IngenieurDetailRepository;
import tn.esprit.dari3d.repositories.PicturesOfDoneProjectsRepository;


import java.util.List;
@Service

public class IngenieurDetailService implements IIngenieurDetailService {
  @Autowired
  private IngenieurDetailRepository ingenieurDetailRepository;

  @Override
  public IngenieurDetail createIngenieurDetail(IngenieurDetail ingenieurDetail) {
    return ingenieurDetailRepository.save(ingenieurDetail);
  }

  @Override
  public IngenieurDetail getIngenieurDetailById(Long id) {
    return ingenieurDetailRepository.findById(id).orElse(null);
  }

  @Autowired
  private PicturesOfDoneProjectsRepository picturesOfDoneProjectsRepository;

  @Override
  public List<IngenieurDetail> getAllIngenieurDetails() {
    return ingenieurDetailRepository.findAll();
  }

  @Override
  public IngenieurDetail updateIngenieurDetail(IngenieurDetail ingenieurDetail) {
    return ingenieurDetailRepository.save(ingenieurDetail);
  }

  @Override
  public void deleteIngenieurDetail(Long id) {
    ingenieurDetailRepository.deleteById(id);
  }

  public void addPicture(Long ingenieurDetailId, List<PicturesOfDoneProjects> picture) {
    IngenieurDetail ingenieurDetail = ingenieurDetailRepository.findById(ingenieurDetailId).orElseThrow(() -> new RuntimeException("IngenieurDetail not found"));
    if (ingenieurDetail.getPicturesOfDoneProjects().size() < 3)
      ingenieurDetail.setPicturesOfDoneProjects(picture);
    picturesOfDoneProjectsRepository.saveAll(picture);

    ingenieurDetailRepository.save(ingenieurDetail);


  }
}
