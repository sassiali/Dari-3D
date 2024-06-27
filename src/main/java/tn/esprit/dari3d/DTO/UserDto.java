package tn.esprit.dari3d.DTO;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import tn.esprit.dari3d.Entities.Role;
import tn.esprit.dari3d.validator.Whitecap;


@Data
@Getter
@Setter
public class UserDto {


     String firstName;

     String lastName;
     String email;

    @Whitecap
     String phoneNumber;
    String pwd;

    Role role;

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
    public String getPwd() {
        return pwd;
    }
    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
}
