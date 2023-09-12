const checkPermission = (persmissions) => (ressource) => (action) => {

    if(persmissions[ressource] && persmissions[ressource].includes(action)){

        return `Permission granted : ${action} on ${ressource}`;
    }
    return `Permission denied : ${action} on ${ressource}`;
}

