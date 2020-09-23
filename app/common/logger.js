const log4js = require('log4js');

log4js.configure({
    // dummy line number after file name so log can be parsed properly
    appenders: {
        commonOut: { 
            type: 'stdout',
            layout: {
                "type": "pattern",
                "pattern": "%d{yyyy-MM-ddThh:mm:ss.SSS}\t[%p]\t[%c]\t|%m"
            }
        },
        stdOut: { 
            type: 'stdout',
            layout: {
                "type": "pattern",
                "pattern": "%d{yyyy-MM-ddThh:mm:ss.SSS}\t[%p]\t[%c]\t|%m|\t%z\t%X{FILE_NAME}\t1\t%X{MESSAGE_ID}"
            }
        },
        filesOut: { 
            type: 'file',
            filename: '/Users/liuchengqiang/workspace/gitrepository/benben-log-volume/benben-app.log',
            pattern: '_yyyyMMdd.log',
            daysToKeep: 3,
            layout: {
                "type": "pattern",
                "pattern": "%d{yyyy-MM-ddThh:mm:ss.SSS}\t[%p]\t[%c]\t|%m|\t%z\t%X{FILE_NAME}\t1\t%X{MESSAGE_ID}"
            }
        },
    },
    categories: {
        default: { 
            appenders: [ 'commonOut' ], 
            level: 'info' 
        },
        App: { 
            appenders: [ 'filesOut', 'stdOut' ], 
            level: 'info' 
        },
    }
});

let logger = {};
logger.App = log4js.getLogger('App');

module.exports = logger;
