import React from 'react'

const UserCompras = () => {
    return (
        <div className="container mt-5 MisComprasBox">
            <div className="row">
                <h3 className="pt-4 mb-4">Mis compras</h3>
                <hr />
            </div>
            <div className="row">
                <h4>06/09/2021</h4>
                <hr className="form-hr" />
                <div className="col-8">
                    <span>vafsafsadfas454fasdf</span>
                    <h6 className="mt-3 mb-3">4 productos</h6>
                </div>
                <div className="col-2">
                    <h5>Facturado</h5>
                    <h6 className="mt-3 mb-3">$910,00</h6>
                </div>
                <div className="col-2 text-center">
                <span><i className="fas fa-chevron-right"></i></span>
                </div>
                <hr />
            </div>
            
        </div>
    )
}

export default UserCompras
