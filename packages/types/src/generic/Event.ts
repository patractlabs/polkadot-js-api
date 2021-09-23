// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeDef } from '../create/types';
import type { EventMetadataLatest } from '../interfaces/metadata';
import type { EventId } from '../interfaces/system';
import type { AnyJson, Codec, Constructor, IEvent, IEventData, InterfaceTypes, Registry } from '../types';

import { Struct } from '../codec/Struct';
import { Tuple } from '../codec/Tuple';
import { Null } from '../primitive/Null';

interface Decoded {
  DataType: Constructor<Null> | Constructor<GenericEventData>;
  value?: {
    index: Uint8Array;
    data: Uint8Array;
  }
}

/** @internal */
function decodeEvent (registry: Registry, value?: Uint8Array): Decoded {
  if (!value || !value.length) {
    return { DataType: Null };
  }

  const index = value.subarray(0, 2);

  return {
    DataType: registry.findMetaEvent(index),
    value: {
      data: value.subarray(2),
      index
    }
  };
}

/**
 * @name GenericEventData
 * @description
 * Wrapper for the actual data that forms part of an [[Event]]
 */
export class GenericEventData extends Tuple implements IEventData {
  readonly #meta: EventMetadataLatest;

  readonly #method: string;

  readonly #section: string;

  readonly #typeDef: TypeDef[];

  constructor (registry: Registry, value: Uint8Array, meta: EventMetadataLatest, section = '<unknown>', method = '<unknown>') {
    const fields = meta?.fields || [];

    super(registry, fields.map(({ type }) => registry.createLookupType(type) as keyof InterfaceTypes), value);

    this.#meta = meta;
    this.#method = method;
    this.#section = section;
    this.#typeDef = fields.map(({ type }) => registry.lookup.getTypeDef(type));
  }

  /**
   * @description The wrapped [[EventMetadata]]
   */
  public get meta (): EventMetadataLatest {
    return this.#meta;
  }

  /**
   * @description The method as a string
   */
  public get method (): string {
    return this.#method;
  }

  /**
   * @description The section as a string
   */
  public get section (): string {
    return this.#section;
  }

  /**
   * @description The [[TypeDef]] for this event
   */
  public get typeDef (): TypeDef[] {
    return this.#typeDef;
  }
}

/**
 * @name GenericEvent
 * @description
 * A representation of a system event. These are generated via the [[Metadata]] interfaces and
 * specific to a specific Substrate runtime
 */
export class GenericEvent extends Struct implements IEvent<Codec[]> {
  // Currently we _only_ decode from Uint8Array, since we expect it to
  // be used via EventRecord
  constructor (registry: Registry, _value?: Uint8Array) {
    const { DataType, value } = decodeEvent(registry, _value);

    super(registry, {
      index: 'EventId',
      // eslint-disable-next-line sort-keys
      data: DataType
    }, value);
  }

  /**
   * @description The wrapped [[EventData]]
   */
  public get data (): GenericEventData {
    return this.get('data') as GenericEventData;
  }

  /**
   * @description The [[EventId]], identifying the raw event
   */
  public get index (): EventId {
    return this.get('index') as EventId;
  }

  /**
   * @description The [[EventMetadata]] with the documentation
   */
  public get meta (): EventMetadataLatest {
    return this.data.meta;
  }

  /**
   * @description The method string identifying the event
   */
  public get method (): string {
    return this.data.method;
  }

  /**
   * @description The section string identifying the event
   */
  public get section (): string {
    return this.data.section;
  }

  /**
   * @description The [[TypeDef]] for the event
   */
  public get typeDef (): TypeDef[] {
    return this.data.typeDef;
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (isExpanded?: boolean): Record<string, AnyJson> {
    return {
      method: this.method,
      section: this.section,
      ...(isExpanded
        ? { docs: this.meta.docs.map((d) => d.toString()) }
        : {}
      ),
      ...super.toHuman(isExpanded)
    };
  }
}
