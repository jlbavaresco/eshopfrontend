import { useState, useEffect } from "react";

const Alerta = ({ alerta }) => {

    const [exibir, setExibir] = useState(false);

    useEffect(() => {
        setExibir(true);
        setTimeout(() => {
            setExibir(false);
        }, 2000);
    }, [alerta]);

    var classe = '';
    if (alerta.status === 'error') {
        classe = 'alert alert-danger'
    } else {
        classe = 'alert alert-primary'
    }

    return (
        <div>
            {(alerta.message.length > 0 && exibir) &&
                <div className={classe} role="alert">
                    {alerta.message}
                </div>
            }
        </div>
    )

}

export default Alerta;