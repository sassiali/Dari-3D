package tn.esprit.dari3d.services;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import tn.esprit.dari3d.DTO.UserDto;
import tn.esprit.dari3d.Entities.Users;
import tn.esprit.dari3d.Mapper.UserMapper;
import tn.esprit.dari3d.repositories.UsersRepository;

import org.springframework.context.MessageSource;

import java.util.Locale;

@Service
@Validated
public class UserService {

    private final UserMapper userMapper = UserMapper.INSTANCE;

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private MessageSource messageSource;

    public Page<UserDto> getAllUsers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Users> usersPage = userRepository.findAll(pageable);
        return usersPage.map(userMapper::userToUserDto);
    }

    public UserDto getUserById(Long id) {
        Users user = userRepository.findById(id).orElse(null);
        return userMapper.userToUserDto(user);
    }

    public UserDto createUser(@Valid UserDto userDto) {
        Users user = userMapper.userDtoToUser(userDto);
        Users savedUser = userRepository.save(user);
        return userMapper.userToUserDto(savedUser);
    }


    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public String getErrorMessage(Locale locale) {
        return messageSource.getMessage("InvalidPhoneNumber", null, locale);
    }

}
