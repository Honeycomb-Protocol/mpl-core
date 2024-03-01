/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { PublicKey } from '@metaplex-foundation/umi';
import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  array,
  dataEnum,
  publicKey as publicKeySerializer,
  struct,
  tuple,
  unit,
} from '@metaplex-foundation/umi/serializers';

export type RuleSet =
  | { __kind: 'None' }
  | { __kind: 'ProgramAllowList'; fields: [Array<PublicKey>] }
  | { __kind: 'ProgramDenyList'; fields: [Array<PublicKey>] };

export type RuleSetArgs = RuleSet;

export function getRuleSetSerializer(): Serializer<RuleSetArgs, RuleSet> {
  return dataEnum<RuleSet>(
    [
      ['None', unit()],
      [
        'ProgramAllowList',
        struct<GetDataEnumKindContent<RuleSet, 'ProgramAllowList'>>([
          ['fields', tuple([array(publicKeySerializer())])],
        ]),
      ],
      [
        'ProgramDenyList',
        struct<GetDataEnumKindContent<RuleSet, 'ProgramDenyList'>>([
          ['fields', tuple([array(publicKeySerializer())])],
        ]),
      ],
    ],
    { description: 'RuleSet' }
  ) as Serializer<RuleSetArgs, RuleSet>;
}

// Data Enum Helpers.
export function ruleSet(kind: 'None'): GetDataEnumKind<RuleSetArgs, 'None'>;
export function ruleSet(
  kind: 'ProgramAllowList',
  data: GetDataEnumKindContent<RuleSetArgs, 'ProgramAllowList'>['fields']
): GetDataEnumKind<RuleSetArgs, 'ProgramAllowList'>;
export function ruleSet(
  kind: 'ProgramDenyList',
  data: GetDataEnumKindContent<RuleSetArgs, 'ProgramDenyList'>['fields']
): GetDataEnumKind<RuleSetArgs, 'ProgramDenyList'>;
export function ruleSet<K extends RuleSetArgs['__kind']>(
  kind: K,
  data?: any
): Extract<RuleSetArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isRuleSet<K extends RuleSet['__kind']>(
  kind: K,
  value: RuleSet
): value is RuleSet & { __kind: K } {
  return value.__kind === kind;
}
