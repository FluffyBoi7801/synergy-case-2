export enum LogType {
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

export const log = (type: LogType, message: string) => {
  switch (type) {
    case LogType.INFO:
      return console.log(
        `\x1b[37m[${type}]: ${new Date()} / ${message}\x1b[0m`,
      );
    case LogType.WARNING:
      return console.warn(
        `\x1b[33m[${type}]: ${new Date()} / ${message}\x1b[0m`,
      );
    case LogType.ERROR:
      return console.error(
        `\x1b[31m[${type}]: ${new Date()} / ${message}\x1b[0m`,
      );
  }
};
