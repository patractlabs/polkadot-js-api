// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    CidVersion: {
      _enum: [
        'V0',
        'V1'
      ]
    },
    CidMultihash: 'GenericCidMultihash',
    Cid: {
      version: 'CidVersion',
      codec: 'u64',
      multihash: 'CidMultihash'
    }
  }
} as Definitions;
