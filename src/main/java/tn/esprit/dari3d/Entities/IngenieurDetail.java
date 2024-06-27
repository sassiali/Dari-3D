package tn.esprit.dari3d.Entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class IngenieurDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String experience;
    private String description;

    @OneToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @OneToMany(mappedBy = "ingenieurDetail")
    private Set<PicturesOfDoneProjects> picturesOfDoneProjects;


}
