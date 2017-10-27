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
        <link rel="stylesheet" type="text/css" href="css/minibanco.css">
    </head>
    <body>
        <header class="navbar-fixed">
            <nav blue-grey darken-2>
                <div class="nav-wrapper blue-grey darken-4">
                    <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
                    <a href="#" class="brand-logo">Mini Banco</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="#!">Sass</a></li>
                        <li><a href="#!">Components</a></li>
                        <li><a href=".contenedor-principal">JavaScript</a></li>
                    </ul>
                </div>
                <ul id="slide-out" class="side-nav fixed top-navbar">
                    <li>
                        <div class="user-view">
                            <div class="background">
                                <img src="img/background.jpg">
                            </div>
                            <a href="#!user"><img class="circle" src="img/man_128.png"></a>
                            <a href="#!name"><span class="white-text name"><c:out value="${sessionScope.usuario.nombre}"/></span></a>
                            <a href="#!email"><span class="white-text email"><c:out value="${sessionScope.usuario.correo}"/></span></a>
                        </div>
                    </li>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Subheader</a></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <div class="contenedor-principal">
                 <!--Aqui van los archivos jsp de cada una de las tablas del dashboard--> 
            </div>
        </main>
        <script type="text/javascript" src="js/libs/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/libs/materialize.min.js"></script>
        <script type="text/javascript" src="js/app/app.dom.js"></script>
        <script type="text/javascript" src="js/app/app.ajax.js"></script>
        <script type="text/javascript" src="js/home/home.vista.js"></script>
    </body>
</html>
