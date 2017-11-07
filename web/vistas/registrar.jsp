<%-- 
    Document   : registrar
    Created on : 31-oct-2017, 21:24:45
    Author     : lord_nightmare
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="contenedorCliente">
    <nav>
        <div class="nav-wrapper blue-grey darken-4">
            <div class="col s12" style="margin-left: 10px;">
                <a href="#!" class="breadcrumb">Registrar</a>
            </div>
        </div>
    </nav>
    <div id="clienteForm">
        <form id="formCliente">
            <div class="card-panel grey lighten-4">
                <div class="row">
                    <div class="input-field col m6 s12">
                        <label for="txtNombre">Nombre</label>
                        <input type="text" id="txtNombre" class="validate" required>
                    </div>
                    <div class="input-field col m6 s12">
                        <label for="txtApellido">Apellido</label>
                        <input type="text" id="txtApellido" class="validate">
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
                        <label for="txtecContrasena">Re ingresar contraseña</label>
                        <input type="password" id="txtRecContrasena" class="validate" required>
                    </div>
                    <div class="input-field col m6 s12">
                        <label for="txtIdentificacion">Identificacion</label>
                        <input type="text" id="txtIdentificacion" class="validate" required>
                    </div>
                </div>
            </div>
            <div class="card-panel grey lighten-4">
                <div class="row">
                    <div class="input-field col m6 s12">
                        <label for="txtTelefono">Telefono</label>
                        <input type="text" id="txtTelefono" class="validate" required>
                    </div>
                    <div class="input-field col m6 s12">
                        <label for="txtDireccion">Dirección</label>
                        <input type="text" id="txtDireccion" class="validate" required>
                    </div>
                    <div class="input-field col m6 s12">
                        <label for="txtFechaNacimiento">Fecha nacimiento</label>
                        <input type="text" id="txtFechaNacimiento" class="datepicker validate" required>
                    </div>
                    <div class="input-field col m6 s12">
                        <label for="txtCorreo">Correo</label>
                        <input type="email" id="txtCorreo" class="validate" required>
                    </div>
                </div>
            </div>
            <div class="card-panel grey lighten-4">
                <div class="row">
                    <div class="input-field col s10">
                        <select id="cboTipoCliente">
                            <option value="-1">Seleccione un tipo de cliente...</option>
                        </select>
                    </div>
                    <div class="input-field col s2">
                        <button type="button" data-target="tipoClienteModal" id="btnRegistrarTipoCliente" style="float: right;" class="btn modal-trigger orange lighten-1 waves-effect waves-light"><i class="material-icons">add</i></button>
                    </div>
                </div>
                <div id="tipoClienteModal" class="modal modal-for-fixed">
                    <div class="modal-content">
                        <h4>Agregar nuevo Tipo de cliente</h4>
                        <p>Utiliza esta opción para agregar una nuevo tipo de cliente</p>
                        <div class="row">
                            <div class="input-field col s12 m12">
                                <label for="txtNuevoTipoCliente">Tipo Cliente</label>
                                <input type="text" id="txtNuevoTipoCliente">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green modal-action modal-close waves-effect waves-light">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="card-panel grey lighten-4">
                <div class="row">
                    <div class="input-field col s10">
                        <select id="cboTipoDocumento">
                            <option value="-1">Seleccione un tipo de documento...</option>
                        </select>
                    </div>
                    <div class="input-field col s2">
                        <button type="button" data-target="tipoDocumentoModal" id="btnRegistrarTipoDocumento" style="float: right;" class="btn modal-trigger green lighten-1 waves-effect waves-light"><i class="material-icons">add</i></button>
                    </div>
                </div>
                <div id="tipoDocumentoModal" class="modal modal-for-fixed">
                    <div class="modal-content">
                        <h4>Agregar nuevo Tipo de documento</h4>
                        <p>Utiliza esta opción para agregar una nuevo tipo de documento</p>
                        <div class="row">
                            <div class="input-field col s12 m12">
                                <label for="txtNuevoTipoCliente">Tipo Documento</label>
                                <input type="text" id="txtNuevoTipoDocumento">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green modal-action modal-close waves-effect waves-light">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="card-panel grey lighten-4">
                <div class="row">
                    <div class="input-field col m6 offset-m6 s12">
                        <div class="row">
                            <div class="input-field col m6 s6">
                                <button type="submit" id="btnGuardar" style="float: right;" class="btn blue lighten-1 waves-effect waves-light">Guardar</button>
                            </div>
                            <div class="input-field col m6 s6">
                                <button type="reset" style="float: right;" class="btn red waves-effect waves-light">Limpiar</button>
                            </div>
                        </div>
                    </div>
                </div>
        </form>
    </div>
</div>
<script type="text/javascript" src="js/registrar/registrar.control.js"></script>
<script type="text/javascript" src="js/registrar/registrar.vista.js"></script>
</div>
