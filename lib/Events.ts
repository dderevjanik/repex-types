import * as t from 'io-ts';

// #region Base

export const Log = t.interface({
  date: t.number
});

export const MouseClick = t.interface({
  x: t.number,
  y: t.number
});

// #endregion

// #region Events

export const EventNetwork = t.intersection([
  t.interface({
    type: t.literal('NETWORK'),
    url: t.string,
    method: t.union([t.literal('GET'), t.literal('POST'), t.literal('PUT'), t.literal('DELETE')]),
    responseStatus: t.number,
    responseText: t.string
  }),
  Log
]);
export type EventNetwork = t.TypeOf<typeof EventNetwork>;

export const EventInput = t.intersection([
  Log,
  t.interface({
    type: t.literal('INPUT'),
    value: t.string,
    elementId: t.string,
    elementPath: t.array(t.string)
  })
]);
export type EventInput = t.TypeOf<typeof EventInput>;

export const EventClick = t.intersection([
  Log,
  MouseClick,
  t.interface({
    type: t.literal('CLICK'),
    elementId: t.string,
    elementPath: t.array(t.string)
  })
]);
export type EventClick = t.TypeOf<typeof EventClick>;

export const EventPromiseError = t.interface({
  type: t.literal('EVENT_PROMISE_ERROR'),
  message: t.string,
  stack: t.array(t.any)
});
export type EventPromiseError = t.TypeOf<typeof EventPromiseError>;

export const EventUncaughtError = t.interface({
  type: t.literal('EVENT_UNCAUGHT_ERROR'),
  url: t.string,
  line: t.string,
  col: t.string,
  text: t.string
});
export type EventUncaughtError = t.TypeOf<typeof EventUncaughtError>;

export const EventConsoleError = t.interface({
  type: t.literal('EVENT_CONSOLE_ERROR'),
  args: t.union([t.array(t.string), t.string])
});
export type EventConsoleError = t.TypeOf<typeof EventConsoleError>;

// #endregion

export const EVENT = t.union([
  EventClick,
  EventInput,
  EventNetwork,
  EventPromiseError,
  EventUncaughtError,
  EventConsoleError
]);

export type EVENT = EventClick | EventInput | EventNetwork | EventPromiseError | EventUncaughtError | EventConsoleError;
