package tn.esprit.dari3d.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.esprit.dari3d.validator.Whitecap;

import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;


    @Column(name = "first_name")
     String firstName;

     String lastName;

     String email;



    @Whitecap
    String phoneNumber;

    String pwd;

    @Enumerated(EnumType.STRING)
     Role role;

    @OneToMany(mappedBy = "user")
    Set<Project> projects;

    @OneToOne(mappedBy = "user")
    IngenieurDetail ingenieurDetail;

   public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getpwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }

    public IngenieurDetail getIngenieurDetail() {
        return ingenieurDetail;
    }

    public void setIngenieurDetail(IngenieurDetail ingenieurDetail) {
        this.ingenieurDetail = ingenieurDetail;
    }
}
