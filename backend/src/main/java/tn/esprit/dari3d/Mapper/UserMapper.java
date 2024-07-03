package tn.esprit.dari3d.Mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import tn.esprit.dari3d.DTO.UserDto;
import tn.esprit.dari3d.Entities.Users;

@Mapper
public interface UserMapper {

 UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

 @Mapping(source ="firstName", target ="firstName")
 @Mapping(source = "lastName", target ="lastName")
 @Mapping(source = "email", target ="email")
 @Mapping(source = "pwd", target ="pwd")
 @Mapping(source = "phoneNumber", target ="phoneNumber")
 @Mapping(source = "role", target ="role")
 UserDto userToUserDto(Users user);

 @Mapping(source = "firstName", target = "firstName")
 @Mapping(source = "lastName", target = "lastName")
 @Mapping(source = "email", target = "email")
    @Mapping(source = "pwd", target = "pwd")

 @Mapping(source = "phoneNumber", target = "phoneNumber")
 @Mapping(source = "role", target = "role")
 Users userDtoToUser(UserDto userDto);
}
