/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.appreactor.minibancoweb.negocio.servlets;

import co.appreactor.minibancoweb.negocio.constantes.ERutas;
import co.edu.intecap.minibancolibreria.modelo.conexion.Conexion;
import co.edu.intecap.minibancolibreria.modelo.dto.RespuestaDto;
import co.edu.intecap.minibancolibreria.modelo.vo.Cliente;
import co.edu.intecap.minibancolibreria.negocio.constantes.EMensajes;
import co.edu.intecap.minibancolibreria.negocio.delegado.ClienteDelegado;
import co.edu.intecap.minibancolibreria.negocio.excepciones.MiniBancoException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Type;
import java.sql.Connection;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author lord_nightmare
 */
@WebServlet(name = "ClienteServlet",
        urlPatterns = {
            ERutas.Cliente.INSERTAR,
            ERutas.Cliente.MODIFICAR,
            ERutas.Cliente.CONSULTAR,
            ERutas.Cliente.BUSCAR,
            ERutas.Cliente.REGISTRAR
        })
public class ClienteServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Determina el tipo de informacion que el servlet puede recibir en el
        // request a traves de un cliente
        response.setContentType("application/json");
        RespuestaDto respuesta = null;
        Connection cnn = null;
        try (PrintWriter out = response.getWriter()) {
            try {
                if (request.getSession().getAttribute("usuario") == null) {
                    throw new MiniBancoException(EMensajes.ERROR_SESION);
                }
                // Conexion a la base de datos
                cnn = Conexion.conectar();
                // invocacion de un delegado que utiliza la conexion a la base de datos
                ClienteDelegado clienteDelegado = new ClienteDelegado(cnn);
                switch (request.getServletPath()) {
                    case ERutas.Cliente.INSERTAR:
                        // invocar el metodo que por reflexion convierte a los
                        // datos de la peticion en un objeto de la clase cliente
                        Cliente clienteGuardar = obtenerCliente(request);
                        clienteDelegado.insertar(clienteGuardar);
                        respuesta = new RespuestaDto(EMensajes.INSERTO);
                        Conexion.commit(cnn);
                        break;
                    case ERutas.Cliente.MODIFICAR:
                        Cliente clienteModificar = obtenerCliente(request);
                        clienteDelegado.editar(clienteModificar);
                        respuesta = new RespuestaDto(EMensajes.MODIFICO);
                        Conexion.commit(cnn);
                        break;
                    case ERutas.Cliente.CONSULTAR:
                        List<Cliente> listaCliente = clienteDelegado.consultar(true);
                        if (!listaCliente.isEmpty()) {
                            respuesta = new RespuestaDto(EMensajes.CONSULTO);
                            respuesta.setDatos(listaCliente);
                        } else {
                            respuesta = new RespuestaDto(EMensajes.NO_RESULTADOS);
                        }
                        break;
                    case ERutas.Cliente.BUSCAR:
                        Cliente clienteConsultado = clienteDelegado.consultar(
                                Long.parseLong(request.getParameter("id"))
                        );
                        if (clienteConsultado.getIdCliente() != null) {
                            respuesta = new RespuestaDto(EMensajes.CONSULTO);
                            respuesta.setDatos(clienteConsultado);
                        } else {
                            respuesta = new RespuestaDto(EMensajes.NO_RESULTADOS);
                        }
                        break;
                    case ERutas.Cliente.REGISTRAR:
                        Cliente clienteRegistrar = obtenerCliente(request);
                        clienteDelegado.registrarClienteTransaccion(clienteRegistrar);
                        respuesta = new RespuestaDto(EMensajes.INSERTO);
                        Conexion.commit(cnn);
                        break;
                }
            } catch (MiniBancoException e) {
                respuesta = new RespuestaDto();
                respuesta.setCodigo(e.getCodigo());
                respuesta.setMensaje(e.getMensaje());
            } finally {
                Conexion.desconectar(cnn);
            }
            out.print(new GsonBuilder().setDateFormat("MMM d, yyyy HH:mm:ss a").create().toJson(respuesta));
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    private Cliente obtenerCliente(HttpServletRequest request) throws MiniBancoException {
        Cliente clienteConvertido = new Cliente();
        try {
            String json = "";
            json = request.getReader().readLine();
            if (json == null) {
                json = request.getParameter("data");
            }
            // permitira obtener el tipo de dato a convertir, en tiempo de ejecucion
            Type tipoDato = new TypeToken<Cliente>() {
            }.getType();
            // convertir el json a objeto de la clase cliente
            clienteConvertido = new GsonBuilder().setDateFormat("MMM d, yyyy HH:mm:ss a").create().fromJson(json, tipoDato); //new Gson().fromJson(json, tipoDato);
        } catch (JsonSyntaxException | IOException e) {
            e.printStackTrace();
            EMensajes mensaje = null;
            if (e instanceof JsonSyntaxException) {
                mensaje = EMensajes.ERROR_FORMATO_DATOS;
            } else if (e instanceof IOException) {
                mensaje = EMensajes.ERROR_RECEPCION_DATOS;
            }
            throw new MiniBancoException(mensaje);
        }
        return clienteConvertido;
    }

}
