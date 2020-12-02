// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AllHashers } from '@polkadot/types/interfaces/metadata/definitions';
import type { StorageHasher } from '@polkadot/types/interfaces';

import { u8aConcat, u8aToU8a } from '@polkadot/util';
import { blake2AsU8a, xxhashAsU8a } from '@polkadot/util-crypto';

export type HasherInput = string | Buffer | Uint8Array;

export type HasherFunction = (data: HasherInput) => Uint8Array;

const DEFAULT_FN = (data: HasherInput): Uint8Array => xxhashAsU8a(data, 128);

const HASHERS: Record<keyof typeof AllHashers, HasherFunction> = {
  Blake2_128: (data: HasherInput): Uint8Array => // eslint-disable-line camelcase
    blake2AsU8a(data, 128),
  Blake2_128Concat: (data: HasherInput): Uint8Array => // eslint-disable-line camelcase
    u8aConcat(blake2AsU8a(data, 128), u8aToU8a(data)),
  Blake2_256: (data: HasherInput): Uint8Array => // eslint-disable-line camelcase
    blake2AsU8a(data, 256),
  Identity: (data: HasherInput): Uint8Array =>
    u8aToU8a(data),
  Twox128: (data: HasherInput): Uint8Array =>
    xxhashAsU8a(data, 128),
  Twox256: (data: HasherInput): Uint8Array =>
    xxhashAsU8a(data, 256),
  Twox64Concat: (data: HasherInput): Uint8Array =>
    u8aConcat(xxhashAsU8a(data, 64), u8aToU8a(data))
};

/** @internal */
export function getHasher (hasher?: StorageHasher): HasherFunction {
  return HASHERS[hasher?.type as 'Identity'] || DEFAULT_FN;
}
