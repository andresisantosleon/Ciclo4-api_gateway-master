const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class ProvedoresAPI extends RESTDataSource {

    constructor() { //Se utiliza el construtor de la clase padre para configurar la URL base
        super();
        this.baseURL = serverConfig.proveedores_api_url;
    }

    async getByID(proveedorID) { //Metodo para obtener proveedor por ID 
        const p=await this.get(`/actualizar/${proveedorID}/`);         
        //return await this.get(`/actualizar/${proveedorID}/`);         
        return await this.get(`/actualizar/${proveedorID}/`);
    }   
}

module.exports = ProvedoresAPI;