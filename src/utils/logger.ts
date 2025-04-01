import winston from 'winston';

// Sanitize sensitive data
const sanitizeData = (data: any): any => {
  if (!data) return data;
  
  const sensitiveFields = ['password', 'token', 'email', 'phone'];
  const sanitized = { ...data };
  
  sensitiveFields.forEach(field => {
    if (field in sanitized) {
      sanitized[field] = '[REDACTED]';
    }
  });
  
  return sanitized;
};

// Create logger instance
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

// Log levels
export const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Logging functions with sanitization
export const log = {
  error: (message: string, data?: any) => {
    logger.error(message, { data: sanitizeData(data) });
  },
  warn: (message: string, data?: any) => {
    logger.warn(message, { data: sanitizeData(data) });
  },
  info: (message: string, data?: any) => {
    logger.info(message, { data: sanitizeData(data) });
  },
  http: (message: string, data?: any) => {
    logger.http(message, { data: sanitizeData(data) });
  },
  debug: (message: string, data?: any) => {
    logger.debug(message, { data: sanitizeData(data) });
  },
};

// Exception handling
export const handleException = (error: Error, context?: string) => {
  log.error(`Exception in ${context || 'unknown context'}: ${error.message}`, {
    stack: error.stack,
    name: error.name,
  });
};

export default logger; 