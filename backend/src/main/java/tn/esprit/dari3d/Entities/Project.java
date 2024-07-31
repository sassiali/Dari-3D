package tn.esprit.dari3d.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long id;
     String projectName;
     Date creationDate;
     Date modificationDate;
     Double totalPrice;
    Integer landDimensions;
  @Enumerated(EnumType.STRING)
  FloorLevel floorLevel;
  @Enumerated(EnumType.STRING)
  Quality quality;
  int nbBedroom;
  int nbKitchen;
  int nbLiving;
  int nbBathroom;
  int nbGarage;
  int terrace;



  @JsonIgnore

    @ManyToOne
     Users user;
  @JsonIgnore

   @ManyToMany(cascade = CascadeType.ALL)
     Set<Material> materials;

}
