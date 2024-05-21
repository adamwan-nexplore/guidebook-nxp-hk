# Application Logging <!-- omit in toc -->

## 1. Objectives

- Structural logging is preferred
- Each log entry should be traceable
  1. when
  2. whom
  3. what key parameters
  4. what correlation_id to find those related entries
- Each log entry should be searchable

      Besides the attribute `msg`, please provide some key attributes for searching / filtering.

- Each log entry should set the log level properly

      It will help any further analysis and in case there are something abnormal

- All log entries in the cluster will sit into DataDog (Europe) due to [GDPR](https://www.wired.co.uk/article/what-is-gdpr-uk-eu-legislation-compliance-summary-fines-2018 "https://www.wired.co.uk/article/what-is-gdpr-uk-eu-legislation-compliance-summary-fines-2018")
- Each log entry should have at least one key attributes to match the data
- Each log entry should avoid to have too many attributes (i.e. keep it less than 10)
- It is fine to log something randomly for investigation but please make sure the log level is in `debug` / `verbose`
- Sensitive Information like `password` and `JWT token` should be redacted

## 2. Implementation

- [Pino](https://github.com/pinojs/pino "https://github.com/pinojs/pino"). It is one of the most popular log libraries supporting `NestJS`

## 3. Reference

- [What Is Structured Logging?](https://sematext.com/glossary/structured-logging "https://sematext.com/glossary/structured-logging")
