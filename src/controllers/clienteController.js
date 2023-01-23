import db from "../database/models/index.js";

const clienteModel = db.Cliente;

const createCliente = async (clienteData) =>{
    try{
        const cliente = await clienteModel.create(clienteData)
        return cliente.id;
    }catch (e){
        console.error(e);
    }
    
};

const getCliente = async (id) =>{

    try{
        const cliente = await clienteModel.findByPk(id);
        return cliente;
    }catch (e){
        console.error(e);
    }
    
};

const updateMiles = async (id, miles) =>{

    try{
        const cliente = await clienteModel.update({ millas: miles }, {
            where: {
                id: id
            }
          });
          return cliente;
    }catch (e){
        console.error(e);
    }
    
};

const getClientes = async () =>{

    try{
        const cliente = await clienteModel.findAll();
          return cliente;
    }catch (e){
        console.error(e);
    }
}

export { createCliente, getCliente, updateMiles, getClientes };
