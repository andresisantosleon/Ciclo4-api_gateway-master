const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class MateriasPrimas extends RESTDataSource {

    constructor() { //Se utiliza el construtor de la clase padre para configurar la URL base
        super();
        this.baseURL = serverConfig.materiasPrimas_api_url;
    }

    async getAllMP() { //Metodo para obtener todas las materias primas 
        return await this.get('/all');
    }   
}

module.exports = MateriasPrimas;