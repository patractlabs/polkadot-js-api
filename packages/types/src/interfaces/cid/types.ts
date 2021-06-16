// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Raw, Struct, u64, u8 } from '@polkadot/types';

/** @name Cid */
export interface Cid extends Struct {
  readonly version: CidVersion;
  readonly codec: u64;
  readonly multihash: CidMultihash;
}

/** @name CidMultihash */
export interface CidMultihash extends Struct {
  readonly codec: u64;
  readonly size1: u8;
  readonly digest: Raw;
}

/** @name CidVersion */
export interface CidVersion extends Enum {
  readonly isV0: boolean;
  readonly isV1: boolean;
}

export type PHANTOM_CID = 'cid';
