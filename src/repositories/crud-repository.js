const {Logger}=require('../config');
class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        //try {
            const response=await this.model.create(data);
            return response;
        // } catch (error) {
        //     Logger.error('Something went wrong in Crud Repo : create');
        //     throw error;
        // }
    }
    async destroy(data){
        try {
            const response=await this.model.destroy({
                where:{
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repo : destroy');
            throw error;
        }
    }
    async get(data){
        try {
            const response=await this.model.findByPK(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repo : get');
            throw error;
        }
    }
    async getAll(){
        try {
            const response=await this.model.fidnAll();
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repo : getAll');
            throw error;
        }
    }
    async update(id,data){ //data={col:value,...}
        try {
            const response=await this.model.update(data,{
                id: id
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repo : update');
            throw error;
        }
    }
}

module.exports=CrudRepository;