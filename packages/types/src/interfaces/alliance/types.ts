// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name BlacklistItem */
export interface BlacklistItem extends Enum {
  readonly isAccountId: boolean;
  readonly asAccountId: AccountId;
  readonly isWebsite: boolean;
  readonly asWebsite: Bytes;
}

/** @name MemberRole */
export interface MemberRole extends Enum {
  readonly isFounder: boolean;
  readonly isFellow: boolean;
  readonly isAlly: boolean;
}

/** @name Url */
export interface Url extends Bytes {}

export type PHANTOM_ALLIANCE = 'alliance';
