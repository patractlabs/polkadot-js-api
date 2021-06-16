// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name MemberRole */
export interface MemberRole extends Enum {
  readonly isFounder: boolean;
  readonly isFellow: boolean;
  readonly isAlly: boolean;
}

/** @name Url */
export interface Url extends Bytes {}

/** @name UserIdentity */
export interface UserIdentity extends Enum {
  readonly isWebsite: boolean;
  readonly asWebsite: Bytes;
  readonly isAccountId: boolean;
  readonly asAccountId: AccountId;
}

export type PHANTOM_ALLIANCE = 'alliance';
