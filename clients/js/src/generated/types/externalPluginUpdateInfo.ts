/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  dataEnum,
  struct,
  tuple,
} from '@metaplex-foundation/umi/serializers';
import {
  DataStoreUpdateInfo,
  DataStoreUpdateInfoArgs,
  LifecycleHookUpdateInfo,
  LifecycleHookUpdateInfoArgs,
  OracleUpdateInfo,
  OracleUpdateInfoArgs,
  getDataStoreUpdateInfoSerializer,
  getLifecycleHookUpdateInfoSerializer,
  getOracleUpdateInfoSerializer,
} from '.';

export type ExternalPluginUpdateInfo =
  | { __kind: 'LifecycleHook'; fields: [LifecycleHookUpdateInfo] }
  | { __kind: 'Oracle'; fields: [OracleUpdateInfo] }
  | { __kind: 'DataStore'; fields: [DataStoreUpdateInfo] };

export type ExternalPluginUpdateInfoArgs =
  | { __kind: 'LifecycleHook'; fields: [LifecycleHookUpdateInfoArgs] }
  | { __kind: 'Oracle'; fields: [OracleUpdateInfoArgs] }
  | { __kind: 'DataStore'; fields: [DataStoreUpdateInfoArgs] };

export function getExternalPluginUpdateInfoSerializer(): Serializer<
  ExternalPluginUpdateInfoArgs,
  ExternalPluginUpdateInfo
> {
  return dataEnum<ExternalPluginUpdateInfo>(
    [
      [
        'LifecycleHook',
        struct<
          GetDataEnumKindContent<ExternalPluginUpdateInfo, 'LifecycleHook'>
        >([['fields', tuple([getLifecycleHookUpdateInfoSerializer()])]]),
      ],
      [
        'Oracle',
        struct<GetDataEnumKindContent<ExternalPluginUpdateInfo, 'Oracle'>>([
          ['fields', tuple([getOracleUpdateInfoSerializer()])],
        ]),
      ],
      [
        'DataStore',
        struct<GetDataEnumKindContent<ExternalPluginUpdateInfo, 'DataStore'>>([
          ['fields', tuple([getDataStoreUpdateInfoSerializer()])],
        ]),
      ],
    ],
    { description: 'ExternalPluginUpdateInfo' }
  ) as Serializer<ExternalPluginUpdateInfoArgs, ExternalPluginUpdateInfo>;
}

// Data Enum Helpers.
export function externalPluginUpdateInfo(
  kind: 'LifecycleHook',
  data: GetDataEnumKindContent<
    ExternalPluginUpdateInfoArgs,
    'LifecycleHook'
  >['fields']
): GetDataEnumKind<ExternalPluginUpdateInfoArgs, 'LifecycleHook'>;
export function externalPluginUpdateInfo(
  kind: 'Oracle',
  data: GetDataEnumKindContent<ExternalPluginUpdateInfoArgs, 'Oracle'>['fields']
): GetDataEnumKind<ExternalPluginUpdateInfoArgs, 'Oracle'>;
export function externalPluginUpdateInfo(
  kind: 'DataStore',
  data: GetDataEnumKindContent<
    ExternalPluginUpdateInfoArgs,
    'DataStore'
  >['fields']
): GetDataEnumKind<ExternalPluginUpdateInfoArgs, 'DataStore'>;
export function externalPluginUpdateInfo<
  K extends ExternalPluginUpdateInfoArgs['__kind'],
>(kind: K, data?: any): Extract<ExternalPluginUpdateInfoArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isExternalPluginUpdateInfo<
  K extends ExternalPluginUpdateInfo['__kind'],
>(
  kind: K,
  value: ExternalPluginUpdateInfo
): value is ExternalPluginUpdateInfo & { __kind: K } {
  return value.__kind === kind;
}
