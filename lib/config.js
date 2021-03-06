/**
 * aonx - default configuration
 */
var config = {};

// --- application configuration
config.app = {};
config.app.title = 'aonx service';
config.app.version = '0.0.1';
config.app.key = 'aonx';
config.app.secret = 'XoB_kCoL';

// cookie age would work only if db is
// enabled and set
config.app.cookieAge = 657450000;  // one week
  
// --- api related configs
config.api = {};
config.api.path = '/api/*';
config.api.keycheck = false;

// --- server related settings
config.server =  {};
config.server.port = process.env.PORT || 8074;
config.server.proxy = true;
config.server.modules = [];

// jsonp:
// - if enabled would accept a 'callback' and optional '_method'
// - _method could be PUT/DELETE/POST, so on GET with this
//   param would set the operation internally to the passed method
config.server.jsonp = false;

// path from where static files are served
config.server.path = __dirname + '/../..';
// if views is set, then 'jade' templates are enabled
//config.server.views= config.server.path + '/views';


// --- auth related settings
config.authentication = {};
config.authentication.enabled = false;
// if authentication is true, then ignores can be set as well
//config.authentication.ignores=['whoami'];
  
// --- db related settings
config.db = {};
config.db.enabled = false;
config.db.url = 'mongodb://localhost:27017/aonx';

// --- cluster configuration
config.cluster = {};
config.cluster.enabled = false;
// workers would be applicable if cluster is enabled
// by default, workers are set to # of cpus
//config.cluster.workers = 2;

// ---- export the config
module.exports = config;
