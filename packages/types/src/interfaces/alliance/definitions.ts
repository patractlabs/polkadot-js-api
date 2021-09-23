// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    MemberRole: {
      _enum: [
        'Founder',
        'Fellow',
        'Ally'
      ]
    },
    Url: 'Vec<u8>',
    BlacklistItem: {
      _enum: {
        AccountId: 'AccountId',
        Website: 'Vec<u8>'
      }
    }
  }
} as Definitions;
