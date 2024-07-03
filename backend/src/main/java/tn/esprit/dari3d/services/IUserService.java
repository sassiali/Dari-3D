package tn.esprit.dari3d.services;

import org.springframework.data.domain.Page;
import tn.esprit.dari3d.DTO.UserDto;

import javax.validation.Valid;
import java.util.Locale;

public interface IUserService {

    public Page<UserDto> getAllUsers(int page, int size);
    public UserDto getUserById(Long id);
    public UserDto createUser(@Valid UserDto userDto);
    public void deleteUser(Long id);
    public String getErrorMessage(Locale locale);
}
