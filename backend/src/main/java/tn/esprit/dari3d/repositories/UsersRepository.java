package tn.esprit.dari3d.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.dari3d.Entities.Users;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Long>, PagingAndSortingRepository<Users, Long> {


}
