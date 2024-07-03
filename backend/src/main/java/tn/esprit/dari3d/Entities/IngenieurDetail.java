package tn.esprit.dari3d.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class IngenieurDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;
    private String experience;
    private String description;
  @JsonIgnore

    @OneToOne
    private Users user;


  @OneToMany(mappedBy = "ingenieurDetail", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<PicturesOfDoneProjects> picturesOfDoneProjects;


}
