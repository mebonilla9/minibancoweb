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
import java.io.IOException;
import java.io.PrintWriter;
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
            ERutas.Cliente.BUSCAR
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
                        
                        break;
                    case ERutas.Cliente.CONSULTAR:
                        List<Cliente> listaCliente = clienteDelegado.consultar();
                        if (!listaCliente.isEmpty()) {
                            respuesta = new RespuestaDto(EMensajes.CONSULTO);
                            respuesta.setDatos(listaCliente);
                        } else {
                            respuesta = new RespuestaDto(EMensajes.NO_RESULTADOS);
                        }
                        break;
                }
            } catch (MiniBancoException e) {
                respuesta = new RespuestaDto();
                respuesta.setCodigo(e.getCodigo());
                respuesta.setMensaje(e.getMensaje());
            } finally {
                Conexion.desconectar(cnn);
            }
            out.print(new Gson().toJson(respuesta));
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

}
