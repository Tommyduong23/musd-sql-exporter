const admin   = require( 'firebase-admin' );

/* initialize firebase */

const serviceAccount = appRequire( 'lcap-glass-dev-firebase.json' );

admin.initializeApp( {
	credential  : admin.credential.cert( serviceAccount ),
	databaseURL : 'https://lcap-glass-dev.firebaseio.com'
} );

const _auth      = admin.auth; // eslint-disable-line
const _database  = admin.database().ref(); // eslint-disable-line

/* base node & helper functions */

// (n: string) -> firebase.database.Reference
const getNode  = node => _database.child( node );

// (s: firebase.database.DataSnapshot) -> object
const identity = snapshot => snapshot.val();

// (c: firebase.database.Reference) -> Promise<object>
const unpack   = child => child.once( 'value' ).then( identity );

const generateKey = () => _database.push().key;

const storageNode    = _database.child( 'storage' );
const goalsNode      = storageNode.child( 'goals' );
const actionsNode    = storageNode.child( 'actions' );
const indicatorsNode = storageNode.child( 'indicators' );

module.exports = {
	_auth,
	_database,

	getNode,
	identity,
	unpack,
	generateKey,

	storageNode,
	goalsNode,
	actionsNode,
	indicatorsNode,

};
