const createLogger = () => {
  const allowedTypes = ['log', 'warn', 'error'];
  const store = [];
  const storeNew = (message, type) =>
    store.push({
      message,
      type,
      dateTime: new Date(),
    });

  // return {
  //   log: (message) => storeNew(message, 'log'),
  //   warn: (message) => storeNew(message, 'warn'),
  //   error: (message) => storeNew(message, 'error'),
  //   getRecords: (type) =>
  //     console.log(
  //       (allowedTypes.includes(type)
  //         ? store.filter((el) => el.type === type)
  //         : store
  //       ).reverse()
  //     ),
  // };

  function log(message) {
    return storeNew(message, 'log');
  }

  function warn(message) {
    return storeNew(message, 'warn');
  }

  function error(message) {
    return storeNew(message, 'error');
  }

  function getRecords(type) {
    console.log(
      (allowedTypes.includes(type)
        ? store.filter((el) => el.type === type)
        : store
      ).reverse()
    );
  }
  return {
    log,
    warn,
    error,
    getRecords,
  };
};

// module.exports.createLogger = createLogger;
// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []
