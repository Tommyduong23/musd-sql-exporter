module.exports = class CustomError extends Error {
	constructor( code, message, status, name = 'CustomError' ) {
		super( message );

		this.code   = code;
		this.status = status;
		this.name   = name;
		this.msg    = message;
	}
};
