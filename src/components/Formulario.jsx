import { useState } from "react";

function Formulario() {
    const [data, setData] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
    });
    const [errors, setErrors] = useState({});
    function validar(userData) {
        const errores = {};
        const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (userData.nombre.length < 3) {
            errores.nombre = "ingrese un nombre valido";
        }
        if (userData.apellido.length < 3) {
            errores.apellido = "ingrese un apellido valido";
        }
        if (userData.dni <= 0) {
            errores.dni = "ingrese un dni valido";
        }
        if (!pattern.test(userData.email)) {
            errores.email = "ingrese un email valido";
        }
        return errores;
    }
    function handleInputChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
        setErrors(validar({ ...data, [e.target.name]: e.target.value }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            alert("Datos enviados!!");
            setData({
                nombre: "",
                apellido: "",
                dni: "",
                email: "",
            });
        } else {
            alert("Completa los datos!!");
        }
    }
    return (
        <>
            <form
                className="py-3 d-flex flex-column gap-2 justify-content-center align-items-center"
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        onChange={handleInputChange}
                        name="nombre"
                        value={data.nombre}
                    />
                    {errors.nombre && (
                        <p className="errores">{errors.nombre}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="surname" className="form-label">
                        Apellido
                    </label>
                    <input
                        type="text"
                        id="surname"
                        className="form-control"
                        onChange={handleInputChange}
                        name="apellido"
                        value={data.apellido}
                    />
                    {errors.apellido && (
                        <p className="errores">{errors.apellido}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="dni" className="form-label">
                        DNI
                    </label>
                    <input
                        type="number"
                        id="dni"
                        className="form-control"
                        onChange={handleInputChange}
                        name="dni"
                        value={data.dni}
                    />
                    {errors.dni && <p className="errores">{errors.dni}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        onChange={handleInputChange}
                        name="email"
                        value={data.email}
                    />
                    {errors.email && <p className="errores">{errors.email}</p>}
                </div>
                <button
                    className="btn btn-outline-secondary mt-2"
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </>
    );
}

export default Formulario;
