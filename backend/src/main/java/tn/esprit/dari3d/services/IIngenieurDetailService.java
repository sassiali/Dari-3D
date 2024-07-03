package tn.esprit.dari3d.services;

import tn.esprit.dari3d.Entities.IngenieurDetail;
import tn.esprit.dari3d.Entities.PicturesOfDoneProjects;

import java.util.List;

public interface IIngenieurDetailService {
  IngenieurDetail createIngenieurDetail(IngenieurDetail ingenieurDetail);
  IngenieurDetail getIngenieurDetailById(Long id);
  List<IngenieurDetail> getAllIngenieurDetails();
  IngenieurDetail updateIngenieurDetail(IngenieurDetail ingenieurDetail);
  void deleteIngenieurDetail(Long id);
  void addPicture(Long ingenieurDetailId,  List <PicturesOfDoneProjects> picture);
}
