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
    UserIdentity: {
      _enum: {
        Website: 'Vec<u8>',
        AccountId: 'AccountId'
      }
    }
  }
} as Definitions;
