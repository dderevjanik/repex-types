import * as t from 'io-ts';

// #region Base

export const IOLog = t.interface({
  date: t.number
});

export const IOMouseClick = t.interface({
  x: t.number,
  y: t.number
});

// #endregion

// #region Events

export const IOEventNetwork = t.intersection([
  t.interface({
    type: t.literal('NETWORK'),
    url: t.string,
    method: t.union([t.literal('GET'), t.literal('POST'), t.literal('PUT'), t.literal('DELETE')]),
    responseStatus: t.number,
    responseText: t.string
  }),
  IOLog
]);
export type EventNetwork = t.TypeOf<typeof IOEventNetwork>;

export const IOEventInput = t.intersection([
  IOLog,
  t.interface({
    type: t.literal('INPUT'),
    value: t.string,
    elementId: t.string,
    elementPath: t.array(t.string)
  })
]);
export type EventInput = t.TypeOf<typeof IOEventInput>;

export const IOEventClick = t.intersection([
  IOLog,
  IOMouseClick,
  t.interface({
    type: t.literal('CLICK'),
    elementId: t.string,
    elementPath: t.array(t.string)
  })
]);
export type EventClick = t.TypeOf<typeof IOEventClick>;

export const IOEventPromiseError = t.interface({
  type: t.literal('EVENT_PROMISE_ERROR'),
  message: t.string,
  stack: t.array(t.any)
});
export type EventPromiseError = t.TypeOf<typeof IOEventPromiseError>;

export const IOEventUncaughtError = t.interface({
  type: t.literal('EVENT_UNCAUGHT_ERROR'),
  url: t.string,
  line: t.string,
  col: t.string,
  text: t.string
});
export type EventUncaughtError = t.TypeOf<typeof IOEventUncaughtError>;

export const IOEventConsoleError = t.interface({
  type: t.literal('EVENT_CONSOLE_ERROR'),
  args: t.union([t.array(t.string), t.string])
});
export type EventConsoleError = t.TypeOf<typeof IOEventConsoleError>;

// #endregion

export const IOEVENT = t.union([
  IOEventClick,
  IOEventInput,
  IOEventNetwork,
  IOEventPromiseError,
  IOEventUncaughtError,
  IOEventConsoleError
]);

export type EVENT = EventClick | EventInput | EventNetwork | EventPromiseError | EventUncaughtError | EventConsoleError;
