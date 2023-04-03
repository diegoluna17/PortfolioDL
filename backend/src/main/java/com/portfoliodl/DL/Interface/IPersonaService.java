package com.portfoliodl.DL.Interface;
import com.portfoliodl.DL.Entity.Persona;
import java.util.List;

/**
 *
 * @author Diego Luna
 */

//El controlador llama a esta interface
public interface IPersonaService {
    //Traer una lista persona
    public List<Persona> getPersona();
    
    //Guardar una persona
    public void savePersona(Persona persona);
    
    //Eliminar una persona a través de su id
    public void deletePersona(Long id);
    
    //Buscar una persona a través de su id
    public Persona findPersona(Long id);
}
