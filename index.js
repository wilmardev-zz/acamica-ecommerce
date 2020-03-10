const menu = () => {
    const option = parseInt(prompt(`\t*********** MENÚ ***********\n
                                    1. Usuarios\na. Alta\nb. Listado
                                    2. Productos\na. Alta\nb. Listado
                                    3. Pedidos\na. Nuevo Pedido\nb. Listado de Pedidos\n
                                    4. Salir`));


    if (option === 1) {
        subMenuUsers();
        menu();
    }
}

menu();