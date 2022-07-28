package com.portfoliodl.DL.Repository;
import com.portfoliodl.DL.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Diego Luna
 */

@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long>{
    
}
