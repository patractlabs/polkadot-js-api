// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, GenericCidMultihash, Struct, u64 } from '@polkadot/types';

/** @name Cid */
export interface Cid extends Struct {
  readonly version: CidVersion;
  readonly codec: u64;
  readonly multihash: CidMultihash;
}

/** @name CidMultihash */
export interface CidMultihash extends GenericCidMultihash {}

/** @name CidVersion */
export interface CidVersion extends Enum {
  readonly isV0: boolean;
  readonly isV1: boolean;
}

export type PHANTOM_CID = 'cid';
