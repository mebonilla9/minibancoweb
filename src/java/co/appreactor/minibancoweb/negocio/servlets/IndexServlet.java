/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.appreactor.minibancoweb.negocio.servlets;

import co.appreactor.minibancoweb.negocio.constantes.ERutas;
import co.edu.intecap.minibancolibreria.modelo.conexion.Conexion;
import co.edu.intecap.minibancolibreria.modelo.vo.Cliente;
import co.edu.intecap.minibancolibreria.negocio.delegado.ClienteDelegado;
import co.edu.intecap.minibancolibreria.negocio.excepciones.MiniBancoException;
import co.edu.intecap.minibancolibreria.negocio.util.CryptoUtil;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author instructor
 */
@WebServlet(name = "IndexServlet",
        urlPatterns = {
            ERutas.Index.INICIAR,
            ERutas.Index.AUTENTICAR,
            ERutas.Index.CERRAR_SESION
        })
public class IndexServlet extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {

            switch (request.getServletPath()) {
                case ERutas.Index.INICIAR:
                    request.getRequestDispatcher("index.jsp").forward(request, response);
                    break;
                case ERutas.Index.AUTENTICAR:
                    iniciarSesion(request, response);
                    break;
                case ERutas.Index.CERRAR_SESION:
                    break;
                default:
                    break;
            }
        } catch (MiniBancoException e) {
            e.printStackTrace();
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

    private void iniciarSesion(HttpServletRequest request, HttpServletResponse response) throws MiniBancoException, ServletException, IOException {
        HttpSession sesion = request.getSession(false);
        if (sesion.getAttribute("usuario") != null) {
            response.sendRedirect(request.getContextPath() + ERutas.Home.CARGAR);
            //request.getRequestDispatcher(ERutas.Home.CARGAR).forward(request, response);
            return;
        }
        String usuario = request.getParameter("usuario");
        String contrasena = request.getParameter("contrasena");

        if (usuario == null || contrasena == null) {
            request.setAttribute("error_usuario", "Usuario no encontrado, intente nuevamente!");
            request.getRequestDispatcher("index.jsp").forward(request, response);
            return;
        }
        Connection cnn = Conexion.conectar();
        Cliente clienteAutorizado = new ClienteDelegado(cnn).consultaLogin(usuario, CryptoUtil.cifrarContrasena(contrasena, "384"));

        if (clienteAutorizado.getIdCliente() == null) {
            request.setAttribute("error_usuario", "Usuario no encontrado, intente nuevamente!");
            request.getRequestDispatcher("index.jsp").forward(request, response);
            return;
        }
        sesion.setAttribute("usuario", clienteAutorizado);
        response.sendRedirect(request.getContextPath() + ERutas.Home.CARGAR);
        //request.getRequestDispatcher(ERutas.Home.CARGAR).forward(request, response);
    }

}
