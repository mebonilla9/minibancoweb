<%-- 
    Document   : index
    Created on : 18-oct-2017, 18:33:06
    Author     : instructor
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/materialize.min.css">
        <link rel="stylesheet" type="text/css" href="css/index.css">

    </head>
    <body class="grey darken-3">
        <div class="container">
            <div class="row" style="height: 30vh;"></div>
            <div class="row">
                <div class="col m4 offset-m4">
                    <form id="fmIniciar" action="autenticar" method="POST">
                        <div class="card">
                            <div class="card-content row">
                                <div class="col s12 input-field">
                                    <input type="text" id="txtUsuario" name="usuario" class="validate" required/>
                                    <label for="txtUsuario">Usuario</label>
                                </div>
                                <div class="col s12 input-field">
                                    <input type="password" id="txtContrasena" name="contrasena" class="validate" required/>
                                    <label for="txtContrasena">Contraseña</label>
                                </div>
                                <c:if test="${error_usuario != null}">
                                    <div class="col s12 red lighten-2 margin-error-login"  >
                                        <h6 class="white-text"><c:out value="${error_usuario}"/></h6>
                                    </div>
                                </c:if>
                                <div class="col s12 m6 offset-m6">
                                    <button class="btn waves-effect waves-light teal darken-3" type="submit">Iniciar Sesion</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="js/libs/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/libs/materialize.min.js"></script>
        <script type="text/javascript" src="js/libs/sha256.js"></script>
        <script type="text/javascript" src="js/index/index.vista.js"></script>
    </body>
</html>
