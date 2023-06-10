const {StatusCodes}=require('http-status-codes');

const {AirplaneService}=require('../services');

const {ErrorResponse,SuccessResponse}=require('../utils/common');

/**
 * POST:airplanes
 * req-boy:{modelNumber:'airbus320',capacity: 200}
 */

async function createAirplane(req,res){
    try {
        //console.log(req.body);//express by default cannot read request body
        const airplane=await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data=airplane;
        return res
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse);
    } catch (error) {      //thrown by service layer
        ErrorResponse.error=error;
        return res
                  .status(error.statusCode) 
                  .json(ErrorResponse);
    }
}

module.exports={
  createAirplane
}
