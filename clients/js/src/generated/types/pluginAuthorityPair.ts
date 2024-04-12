/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Option, OptionOrNullable } from '@metaplex-foundation/umi';
import {
  Serializer,
  option,
  struct,
} from '@metaplex-foundation/umi/serializers';
import {
  Plugin,
  PluginArgs,
  PluginAuthority,
  PluginAuthorityArgs,
  getPluginAuthoritySerializer,
  getPluginSerializer,
} from '.';

export type PluginAuthorityPair = {
  plugin: Plugin;
  authority: Option<PluginAuthority>;
};

export type PluginAuthorityPairArgs = {
  plugin: PluginArgs;
  authority: OptionOrNullable<PluginAuthorityArgs>;
};

export function getPluginAuthorityPairSerializer(): Serializer<
  PluginAuthorityPairArgs,
  PluginAuthorityPair
> {
  return struct<PluginAuthorityPair>(
    [
      ['plugin', getPluginSerializer()],
      ['authority', option(getPluginAuthoritySerializer())],
    ],
    { description: 'PluginAuthorityPair' }
  ) as Serializer<PluginAuthorityPairArgs, PluginAuthorityPair>;
}