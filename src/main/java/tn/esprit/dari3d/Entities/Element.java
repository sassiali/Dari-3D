package tn.esprit.dari3d.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Element {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String elementName;
    private String picture;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;


}
