const Joi           = require( 'joi' );
const { celebrate } = require( 'celebrate' );

const createGlass = celebrate( {
	body : Joi.object().keys( {

	} ).unknown( false ),
} );

const updateGlass = celebrate( {
	body : Joi.object().keys( {

	} ).unknown( false ),
	params : Joi.object().keys( {

	} ).unknown( false ),
} );

const deleteGlass = celebrate( {
	params : Joi.object().keys( {

	} ).unknown( false ),
} );

module.exports = {
	createGlass,
	updateGlass,
	deleteGlass
};
