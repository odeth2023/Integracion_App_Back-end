import React, {useState} from 'react';

export default function Formulario() {
    
    return(
        <div class="container">

            <div className='text-center'>
                <h3 className='m-5'>Formulario de venta</h3>
            </div>

            <div class="row mt-4">
                <div class="col-md">

                    <div class="form-group row">
                        <label for="CodigoFactura" class="col-lg-3 col-form-label">Número de Venta:</label>
                        <div class="col-lg-3">
                            <input></input>
                        </div>
                    </div>


                    <div class="form-group row">
                        <label for="Fecha" class="col-lg-3 col-form-label">Fecha de emisión:</label>
                        <div class="col-lg-3">
                            <input></input>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="CodigoCliente" class="col-lg-3 col-form-label">Cliente:</label>
                        <div class="col-lg-3">
                            <select class="form-control" id="CodigoCliente">
                                <option>Jin Seok</option>
                                <option>Jungkook</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row mt-4">
                    <div class="col-md">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th>Código de Artículo</th>
                                <th>Descripción</th>
                                <th class="text-right">Cantidad</th>
                                <th class="text-right">Precio Unitario</th>
                                <th class="text-right">Total</th>
                                <th class="text-right"></th>
                                </tr>
                            </thead>
                            <tbody id="DetalleFactura">
                            <tr>
                                <th>0001</th>
                                <th>Naruto Manga Tomo 1</th>
                                <th class="text-right">1</th>
                                <th class="text-right">50</th>
                                <th class="text-right">50</th>
                                <th class="text-right"></th>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" id="btnAgregarProducto" class="btn btn-success me-3">Agregar Producto</button>
                        <button type="button" id="btnTerminarFactura" class="btn btn-success">Terminar Venta</button>
                    </div>
                </div>
            </div>    
    );

}


