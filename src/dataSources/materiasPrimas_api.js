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
    
    async createMP(materiaPrima){
        materiaPrima=new Object(JSON.parse(JSON.stringify(materiaPrima)));
        return await this.post('/save', materiaPrima);
    }
}

module.exports = MateriasPrimas;