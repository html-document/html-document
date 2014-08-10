var Document = require('./Document').Document;

global.window = global;
global.document = new Document();
global.Event = require('./Event').Event;