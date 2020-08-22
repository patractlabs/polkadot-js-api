(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{678:function(t,e,s){"use strict";s.r(e);var r=s(42),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("RouterLink",{attrs:{to:"/types/"}},[t._v("Polkadot JS API")]),t._v(" › "),s("RouterLink",{attrs:{to:"/types/globals.html"}},[t._v("Globals")])],1),t._v(" "),s("h1",{attrs:{id:"polkadot-js-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-js-api"}},[t._v("#")]),t._v(" Polkadot JS API")]),t._v(" "),s("h1",{attrs:{id:"polkadot-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-types"}},[t._v("#")]),t._v(" @polkadot/types")]),t._v(" "),s("p",[t._v("Implementation of the types and their (de-)serialisation via SCALE codec."),s("br"),t._v("\nOn the Rust side, the codec types and primitive types are implemented via the "),s("a",{attrs:{href:"https://github.com/paritytech/parity-codec",target:"_blank",rel:"noopener noreferrer"}},[t._v("parity-codec"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"codec-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codec-types"}},[t._v("#")]),t._v(" Codec types")]),t._v(" "),s("p",[t._v("These are the base types of the codec. They are typically not used directly, but rather inherited from to create specific types. They are the building blocks for declaring custom types:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Types")])]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_compact_.compact.html"}},[t._v("Compact")])],1),t._v(" "),s("td",[t._v("A compact length-encoding codec wrapper. Mostly used by other types to add length-prefixed encoding")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_enum_.enum.html"}},[t._v("Enum")])],1),t._v(" "),s("td",[t._v("A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_int_.int.html"}},[t._v("Int")])],1),t._v(" "),s("td",[t._v("A generic signed integer codec")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_option_.option.html"}},[t._v("Option")])],1),t._v(" "),s("td",[t._v("An Option is an optional field. The first byte indicates that there is a value to follow")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_btreeset_.btreeset.html#static-set"}},[t._v("Set")])],1),t._v(" "),s("td",[t._v("An Set is an array of string values, represented an an encoded type by a bitwise representation of the values")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_struct_.struct.html"}},[t._v("Struct")])],1),t._v(" "),s("td",[t._v("A Struct defines an Object with key-value pairs - where the values are Codec values.")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_tuple_.tuple.html"}},[t._v("Tuple")])],1),t._v(" "),s("td",[t._v("A Tuple defines an anonymous fixed-length array, where each element has its own type")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_raw_.raw.html"}},[t._v("Raw")])],1),t._v(" "),s("td",[t._v("A basic wrapper around Uint8Array. It will consume the full Uint8Array as passed to it")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_u8afixed_.u8afixed.html"}},[t._v("U8aFixed")])],1),t._v(" "),s("td",[t._v("A U8a that manages a a sequence of bytes up to the specified bitLength")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_uint_.uint.html"}},[t._v("UInt")])],1),t._v(" "),s("td",[t._v("A generic unsigned integer codec. It handles the encoding and decoding of Little Endian encoded numbers in Substrate")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_vec_.vec.html"}},[t._v("Vec")])],1),t._v(" "),s("td",[t._v("This manages codec arrays. Internally it keeps track of the length (as decoded)")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_vecany_.vecany.html"}},[t._v("VecAny")])],1),t._v(" "),s("td",[t._v("This manages codec arrays, assuming that the inputs are already of type Codec")])])])]),t._v(" "),s("h2",{attrs:{id:"primitive-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#primitive-types"}},[t._v("#")]),t._v(" Primitive types")]),t._v(" "),s("p",[t._v("These primitive types are available:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Types")])]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_generic_accountid_.accountid.html"}},[t._v("AccountId")])],1),t._v(" "),s("td",[t._v("A wrapper around an AccountId/PublicKey representation")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_generic_accountindex_.accountindex.html"}},[t._v("AccountIndex")])],1),t._v(" "),s("td",[t._v("A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#address"}},[t._v("Address")])],1),t._v(" "),s("td",[t._v("A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#bool"}},[t._v("bool")])],1),t._v(" "),s("td",[t._v("Representation for a boolean value in the system")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_primitive_bytes_.bytes.html"}},[t._v("Bytes")])],1),t._v(" "),s("td",[t._v("A Bytes wrapper for "),s("code",[t._v("Vec<u8>")])])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_generic_call_.call.html"}},[t._v("Call")])],1),t._v(" "),s("td",[t._v("Extrinsic function descriptor, as defined in "),s("a",{attrs:{href:"https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node",target:"_blank",rel:"noopener noreferrer"}},[t._v("the extrinsic format for a node"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_generic_event_.event.html"}},[t._v("Event")])],1),t._v(" "),s("td",[t._v("Wrapper for the actual data that forms part of an "),s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_generic_event_.event.html"}},[t._v("Event")])],1)]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#eventrecord"}},[t._v("EventRecord")])],1),t._v(" "),s("td",[t._v("A record for an "),s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_generic_event_.event.html"}},[t._v("Event")]),t._v(" (as specified by [[Metadata]]) with the specific "),s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#phase"}},[t._v("Phase")]),t._v(" of application")],1)]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_extrinsic_extrinsic_.extrinsic.html"}},[t._v("Extrinsic")])],1),t._v(" "),s("td",[t._v("Representation of an Extrinsic in the system")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_extrinsic_extrinsicera_.extrinsicera.html"}},[t._v("ExtrinsicEra")])],1),t._v(" "),s("td",[t._v("The era for an extrinsic, indicating either a mortal or immortal extrinsic")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.html"}},[t._v("ExtrinsicPayload")])],1),t._v(" "),s("td",[t._v("A signing payload for an "),s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_extrinsic_extrinsic_.extrinsic.html"}},[t._v("Extrinsic")]),t._v(". For the final encoding, it is variable length based on the contents included")],1)]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#h160"}},[t._v("H160")])],1),t._v(" "),s("td",[t._v("Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and as a sane default")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#h256"}},[t._v("H256")])],1),t._v(" "),s("td",[t._v("Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and as a sane default")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#h512"}},[t._v("H512")])],1),t._v(" "),s("td",[t._v("Hash containing 512 bits (64 bytes), typically used for signatures")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#hash"}},[t._v("Hash")])],1),t._v(" "),s("td",[t._v("The default hash that is used accross the system. It is just a thin wrapper around "),s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#h256"}},[t._v("H256")])],1)]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#i8"}},[t._v("i8")])],1),t._v(" "),s("td",[t._v("An 8-bit signed integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#i16"}},[t._v("i16")])],1),t._v(" "),s("td",[t._v("A 16-bit signed integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#i32"}},[t._v("i32")])],1),t._v(" "),s("td",[t._v("A 32-bit signed integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#i64"}},[t._v("i64")])],1),t._v(" "),s("td",[t._v("A 64-bit signed integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#i128"}},[t._v("i128")])],1),t._v(" "),s("td",[t._v("A 128-bit signed integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#i256"}},[t._v("i256")])],1),t._v(" "),s("td",[t._v("A 256-bit signed integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#moment"}},[t._v("Moment")])],1),t._v(" "),s("td",[t._v("A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust)")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_primitive_null_.null.html"}},[t._v("Null")])],1),t._v(" "),s("td",[t._v("Implements a type that does not contain anything (apart from "),s("code",[t._v("null")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#signature"}},[t._v("Signature")])],1),t._v(" "),s("td",[t._v("The default signature that is used accross the system")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#storagedata"}},[t._v("StorageData")])],1),t._v(" "),s("td",[t._v("Data retrieved via Storage queries and data for key-value pairs")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_primitive_storagekey_.storagekey.html"}},[t._v("StorageKey")])],1),t._v(" "),s("td",[t._v("A representation of a storage key (typically hashed) in the system")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_primitive_text_.text.html"}},[t._v("Text")])],1),t._v(" "),s("td",[t._v("This is a string wrapper, along with the length.")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/classes/_packages_types_src_codec_struct_.struct.html#type"}},[t._v("Type")])],1),t._v(" "),s("td",[t._v("This is a extended version of String, specifically to handle types")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#u8"}},[t._v("u8")])],1),t._v(" "),s("td",[t._v("An 8-bit unsigned integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#u16"}},[t._v("u16")])],1),t._v(" "),s("td",[t._v("A 16-bit unsigned integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#u32"}},[t._v("u32")])],1),t._v(" "),s("td",[t._v("A 32-bit unsigned integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#u64"}},[t._v("u64")])],1),t._v(" "),s("td",[t._v("A 64-bit unsigned integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#u128"}},[t._v("u128")])],1),t._v(" "),s("td",[t._v("A 128-bit unsigned integer")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/types/interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.html#u256"}},[t._v("u256")])],1),t._v(" "),s("td",[t._v("A 256-bit unsigned integer")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);