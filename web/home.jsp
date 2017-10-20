<%-- 
    Document   : home
    Created on : 19-oct-2017, 20:01:47
    Author     : instructor
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>JSP Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/materialize.min.css">
        <link rel="stylesheet" type="text/css" href="css/index.css">
    </head>
    <body>
        <header>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
                    <a href="#" class="brand-logo">
                        <c:out value="${sessionScope.usuario.nombre}"/>
                    </a>                
                </div>
            </nav>
        </header>
        <main>
            <div id="contenedor" class="row">
                <div id="sideMenu" class="col s3">
                    <!-- representacion del menu de la aplicacion -->
                    <ul class="side-nav fixed">

                        <li>
                            <a href="#!">Prueba 1</a>
                        </li>
                        <li>
                            <a href="#!">Prueba 2</a>
                        </li>
                    </ul>
                </div>
                <div id="contenido" class="col s9">
                    <!-- representacion de los formularios por modulo -->
                </div>
            </div>
        </main>
        <script type="text/javascript" src="js/libs/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/libs/materialize.min.js"></script>
    </body>
</html>
