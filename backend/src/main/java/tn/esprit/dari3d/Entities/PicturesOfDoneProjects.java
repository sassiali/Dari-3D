package tn.esprit.dari3d.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Base64;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PicturesOfDoneProjects {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Setter(AccessLevel.NONE)
  Long id;

  String picturePath; // Ajout du champ pour le chemin d'accès de l'image

  @JsonIgnore
  @ManyToOne
  @JoinColumn(name = "ingenieur_detail_id")
  IngenieurDetail ingenieurDetail;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setPicturePath(String picturePath) {
    this.picturePath = picturePath; // Modification de la méthode pour enregistrer le chemin d'accès de l'image
  }
}
