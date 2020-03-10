const listUsers = [];

const subMenuUsers = () => {
    const option = prompt(`\t*********** MENÚ ***********\na. Alta\nb. Listado`);
    if (option === 'a') {
        listUsers.push(addUser());
    }
    else {
        return showUsers();
    }
}

const addUser = () => {
    const name = prompt('Ingrese nombre de usuario');
    const lastName = prompt('Ingrese apellido');
    const email = prompt('Ingrese email');
    return new User(name, lastName, email);
}

const showUsers = () => {
    return alert(JSON.stringify(listUsers));
}