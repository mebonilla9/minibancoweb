<%-- 
    Document   : cliente
    Created on : 24-oct-2017, 19:31:35
    Author     : instructor
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div id="contenedorCliente">
    <div class="card-panel grey lighten-4">
        <nav>
            <div class="nav-wrapper blue-grey darken-4">
                <div class="col s12" style="margin-left: 10px;">
                    <a href="#!" class="breadcrumb">Administración</a>
                    <a href="#!" class="breadcrumb">Cliente</a>
                </div>
            </div>
        </nav>
        <div id="clienteForm" class="row">
            <form id="formCliente">
                <div class="input-field col m6 s12">
                    <label for="txtNombre">Nombre</label>
                    <input type="text" id="txtNombre" class="validate" required>
                </div>
                <div class="input-field col m6 s12">
                    <label for="txtApellido">Apellido</label>
                    <input type="text" id="txtApellido" class="validate">
                </div>
                <div class="input-field col m6 s12">
                    <label for="txtIdentificacion">Identificacion</label>
                    <input type="text" id="txtIdentificacion" class="validate" required>
                </div>
                <div class="input-field col m6 s12">
                    <label for="txtTelefono">Telefono</label>
                    <input type="text" id="txtTelefono" class="validate" required>
                </div>
                <div class="input-field col m6 s12">
                    <label for="txtDireccion">Dirección</label>
                    <input type="text" id="txtDireccion" class="validate" required>
                </div>
                <div class="input-field col m6 s12">
                    <label for="txtUsuario">Usuario</label>
                    <input type="text" id="txtUsuario" class="validate" required>
                </div>
                <div class="input-field col m6 s12">
                    <label for="txtContrasena">Contraseña</label>
                    <input type="password" id="txtContrasena" class="validate" required>
                </div>
                <div class="input-field col m6 s12">
                    <label for="txtFechaNacimiento">Fecha nacimiento</label>
                    <input type="text" id="txtFechaNacimiento" class="datepicker validate" required>
                </div>
                <div class="input-field col m6 s12">
                    <label for="txtCorreo">Correo</label>
                    <input type="email" id="txtCorreo" class="validate" required>
                </div>
                <div class="input-field col m6 s12">
                    <select id="cboTipoCliente">
                        <option value="-1">Seleccione un tipo de cliente...</option>
                    </select>
                </div>
                <div class="input-field col m6 s12">
                    <select id="cboTipoDocumento">
                        <option value="-1">Seleccione un tipo de documento...</option>
                    </select>
                </div>
                <div class="switch col m6 s12">
                    <label>
                        Inactivo
                        <input type="checkbox" id="cbxEstado">
                        <span class="lever"></span>
                        Activo
                    </label>
                </div>
                <div class="input-field col m12 s12">
                    <button type="submit" id="btnGuardar" style="float: right;" class="btn blue lighten-1 waves-effect waves-light">Guardar</button>
                </div>
                <div class="input-field col m12 s12">
                    <button type="reset" style="float: right;" class="btn red waves-effect waves-light">Limpiar</button>
                </div>
            </form>
        </div>
    </div>
    <div class="">
        <div id="clienteTable" class="row">
            <table id="tblCliente" class="card-panel grey lighten-5 striped highlight responsive-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Identificación</th>
                        <th>Telefono</th>
                        <th>Dirección</th>
                        <th>Usuario</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Correo</th>
                        <th>Tipo Cliente</th>
                        <th>Tipo Documento</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
    <script type="text/javascript" src="js/cliente/cliente.modelo.js"></script>
    <script type="text/javascript" src="js/cliente/cliente.control.js"></script>
    <script type="text/javascript" src="js/cliente/cliente.vista.js"></script>
</div>
