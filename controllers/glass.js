const express  = require( 'express' );

const lib = libRequire( 'glass' ); // Contains Service and Validators


const router = express.Router();

router.post( '/glass', lib.Validator.createGlass, ( { body, params }, res, next ) => {

} );

router.put( '/glass', lib.Validator.updateGlass, ( { body, params }, res, next ) => {

} );

router.delete( '/glass', lib.Validator.deleteGlass, ( { body, params }, res, next ) => {

} );

module.exports = router;
