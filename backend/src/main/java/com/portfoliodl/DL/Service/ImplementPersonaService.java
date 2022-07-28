package com.portfoliodl.DL.Service;
import com.portfoliodl.DL.Entity.Persona;
import com.portfoliodl.DL.Interface.IPersonaService;
import com.portfoliodl.DL.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Diego Luna
 */

@Service
public class ImplementPersonaService implements IPersonaService{

    @Autowired IPersonaRepository ipersonaRepository;
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> personaList = ipersonaRepository.findAll();
        return personaList;
    }

    @Override
    public void savePersona(Persona persona) {
        ipersonaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        ipersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }
    
}
