/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.appreactor.minibancoweb.negocio.constantes;

/**
 *
 * @author instructor
 */
public final class ERutas {

    public static final class Index {

        public static final String INICIAR = "/inicio";
        public static final String AUTENTICAR = "/autenticar";
        public static final String CERRAR_SESION = "/logout";

    }
    
    public static final class Home {

        public static final String CARGAR = "/home";

    }
    
    public static final class TipoCliente {
        
        public static final String INSERTAR = "/tipocliente/insertar";
        public static final String MODIFICAR = "/tipocliente/modificar";
        public static final String CONSULTAR = "/tipocliente/consultar";
        public static final String BUSCAR = "/tipocliente/buscar";
        
    }
    
    public static final class TipoDocumento {
        
        public static final String INSERTAR = "/tipodocumento/insertar";
        public static final String MODIFICAR = "/tipodocumento/modificar";
        public static final String CONSULTAR = "/tipodocumento/consultar";
        public static final String BUSCAR = "/tipodocumento/buscar";
        
    }
    
    public static final class Cliente {
        
        public static final String INSERTAR = "/cliente/insertar";
        public static final String MODIFICAR = "/cliente/modificar";
        public static final String CONSULTAR = "/cliente/consultar";
        public static final String BUSCAR = "/cliente/buscar";
        
    }

    
}
