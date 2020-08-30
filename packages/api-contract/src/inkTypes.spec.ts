// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry, createType } from '@polkadot/types';

import erc20 from '../test/abi/v3-erc20.json';
import { getProjectTypes } from './inkTypes';

const registry = new TypeRegistry();

describe('inkTypes', (): void => {
  const project = createType(registry, 'InkProject', erc20);

  it('converts using getProjectTypes', (): void => {
    expect(getProjectTypes(project)).toEqual([
      [1, 'u128', null],
      [2, 'ink_core::storage2::collections::stash::Header', '{"last_vacant":"u32","len":"u32","len_entries":"u32"}'],
      [3, 'u32', null],
      [
        4,
        'ink_core::storage2::collections::stash::Entry',
        '{_enum:{"Vacant":ink_core::storage2::collections::stash::VacantEntry,"Occupied":(ink_core::env::types::AccountId)}}'
      ],
      [5, 'ink_core::env::types::AccountId', '[u8;32]'],
      [6, '[u8;32]', null],
      [7, 'u8', null],
      [8, 'ink_core::storage2::collections::stash::VacantEntry', '{"next":"u32","prev":"u32"}'],
      [9, 'ink_core::storage2::collections::hashmap::ValueEntry', '{"value":"u128","key_index":"u32"}'],
      [
        10,
        'ink_core::storage2::collections::stash::Entry',
        '{_enum:{"Vacant":ink_core::storage2::collections::stash::VacantEntry,"Occupied":((ink_core::env::types::AccountId,ink_core::env::types::AccountId))}}'
      ],
      [11, '(ink_core::env::types::AccountId,ink_core::env::types::AccountId)', null],
      [12, 'bool', null],
      [13, 'Option<ink_core::env::types::AccountId>', '{_enum:{"None":Null,"Some":ink_core::env::types::AccountId}}']
    ]);
  });
});
