package tn.esprit.dari3d.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class PicturesOfDoneProjects {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String pictures;

    @ManyToOne
    @JoinColumn(name = "ingenieur_detail_id")
    private IngenieurDetail ingenieurDetail;


}
