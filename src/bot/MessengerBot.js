/* @flow */

import type { SessionStore } from '../session/SessionStore';

import Bot from './Bot';
import MessengerConnector from './MessengerConnector';

export default class MessengerBot extends Bot {
  constructor({
    accessToken,
    appSecret,
    sessionStore,
    sync,
  }: {
    accessToken: string,
    appSecret: string,
    sessionStore: SessionStore,
    sync?: boolean,
  }) {
    const connector = new MessengerConnector({ accessToken, appSecret });
    super({ connector, sessionStore, sync });
  }
}
