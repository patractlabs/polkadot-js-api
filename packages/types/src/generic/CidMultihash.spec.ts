// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable new-cap */

import multihashes from 'multihashes';

import { hexToU8a, u8aConcat, u8aEq } from '@polkadot/util';

import { Vec } from '../codec';
import { TypeRegistry } from '../create';
import { u8, u64 } from '../primitive';
import { GenericCidMultihash as CidMultihash } from './CidMultihash';

describe('CidMultihash', (): void => {
  const registry = new TypeRegistry();

  it('encode CidMultihash from native multihash', (): void => {
    const multi = multihashes.fromHexString('12202fe65ccc17fe180c3bf4e9b8490fcc6dc74c30bf6595795dcd1136d8d9cb3f95');

    expect(
      new CidMultihash(
        registry,
        u8aConcat(
          new u64(registry, multi.slice(0, 1)).toU8a(),
          new u8(registry, multi.slice(1, 2)).toU8a(),
          multi.slice(2)
        )
      )
        .eq('0x1200000000000000202fe65ccc17fe180c3bf4e9b8490fcc6dc74c30bf6595795dcd1136d8d9cb3f95')
    ).toBe(true);
  });

  it('decode CidMultihash', (): void => {
    const cidMultihash = new CidMultihash(registry, '0x1200000000000000202fe65ccc17fe180c3bf4e9b8490fcc6dc74c30bf6595795dcd1136d8d9cb3f95');

    expect(u8aEq(
      cidMultihash.toMultihash(),
      hexToU8a('0x12202fe65ccc17fe180c3bf4e9b8490fcc6dc74c30bf6595795dcd1136d8d9cb3f95')
    )).toBe(true);
  });

  it('decode vec<CidMultihash>', (): void => {
    const cids = new Vec(registry, 'CidMultihash', '0x081200000000000000202fe65ccc17fe180c3bf4e9b8490fcc6dc74c30bf6595795dcd1136d8d9cb3f951200000000000000202fe65ccc17fe180c3bf4e9b8490fcc6dc74c30bf6595795dcd1136d8d9cb3f95');

    expect(
      u8aEq(
        u8aConcat(...cids.map((cid) => cid.toU8a())),
        hexToU8a('0x1200000000000000202fe65ccc17fe180c3bf4e9b8490fcc6dc74c30bf6595795dcd1136d8d9cb3f951200000000000000202fe65ccc17fe180c3bf4e9b8490fcc6dc74c30bf6595795dcd1136d8d9cb3f95')
      )
    ).toBe(true);
  });
});
