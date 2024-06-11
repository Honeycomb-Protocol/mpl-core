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
  BaseAppDataInitInfo,
  BaseAppDataInitInfoArgs,
  BaseAssetLinkedAppDataInitInfo,
  BaseAssetLinkedAppDataInitInfoArgs,
  BaseAssetLinkedLifecycleHookInitInfo,
  BaseAssetLinkedLifecycleHookInitInfoArgs,
  BaseDataSectionInitInfo,
  BaseDataSectionInitInfoArgs,
  BaseLifecycleHookInitInfo,
  BaseLifecycleHookInitInfoArgs,
  BaseOracleInitInfo,
  BaseOracleInitInfoArgs,
  getBaseAppDataInitInfoSerializer,
  getBaseAssetLinkedAppDataInitInfoSerializer,
  getBaseAssetLinkedLifecycleHookInitInfoSerializer,
  getBaseDataSectionInitInfoSerializer,
  getBaseLifecycleHookInitInfoSerializer,
  getBaseOracleInitInfoSerializer,
} from '.';

export type BaseExternalPluginAdapterInitInfo =
  | { __kind: 'LifecycleHook'; fields: [BaseLifecycleHookInitInfo] }
  | { __kind: 'Oracle'; fields: [BaseOracleInitInfo] }
  | { __kind: 'AppData'; fields: [BaseAppDataInitInfo] }
  | {
      __kind: 'AssetLinkedLifecycleHook';
      fields: [BaseAssetLinkedLifecycleHookInitInfo];
    }
  | { __kind: 'AssetLinkedAppData'; fields: [BaseAssetLinkedAppDataInitInfo] }
  | { __kind: 'DataSection'; fields: [BaseDataSectionInitInfo] };

export type BaseExternalPluginAdapterInitInfoArgs =
  | { __kind: 'LifecycleHook'; fields: [BaseLifecycleHookInitInfoArgs] }
  | { __kind: 'Oracle'; fields: [BaseOracleInitInfoArgs] }
  | { __kind: 'AppData'; fields: [BaseAppDataInitInfoArgs] }
  | {
      __kind: 'AssetLinkedLifecycleHook';
      fields: [BaseAssetLinkedLifecycleHookInitInfoArgs];
    }
  | {
      __kind: 'AssetLinkedAppData';
      fields: [BaseAssetLinkedAppDataInitInfoArgs];
    }
  | { __kind: 'DataSection'; fields: [BaseDataSectionInitInfoArgs] };

export function getBaseExternalPluginAdapterInitInfoSerializer(): Serializer<
  BaseExternalPluginAdapterInitInfoArgs,
  BaseExternalPluginAdapterInitInfo
> {
  return dataEnum<BaseExternalPluginAdapterInitInfo>(
    [
      [
        'LifecycleHook',
        struct<
          GetDataEnumKindContent<
            BaseExternalPluginAdapterInitInfo,
            'LifecycleHook'
          >
        >([['fields', tuple([getBaseLifecycleHookInitInfoSerializer()])]]),
      ],
      [
        'Oracle',
        struct<
          GetDataEnumKindContent<BaseExternalPluginAdapterInitInfo, 'Oracle'>
        >([['fields', tuple([getBaseOracleInitInfoSerializer()])]]),
      ],
      [
        'AppData',
        struct<
          GetDataEnumKindContent<BaseExternalPluginAdapterInitInfo, 'AppData'>
        >([['fields', tuple([getBaseAppDataInitInfoSerializer()])]]),
      ],
      [
        'AssetLinkedLifecycleHook',
        struct<
          GetDataEnumKindContent<
            BaseExternalPluginAdapterInitInfo,
            'AssetLinkedLifecycleHook'
          >
        >([
          [
            'fields',
            tuple([getBaseAssetLinkedLifecycleHookInitInfoSerializer()]),
          ],
        ]),
      ],
      [
        'AssetLinkedAppData',
        struct<
          GetDataEnumKindContent<
            BaseExternalPluginAdapterInitInfo,
            'AssetLinkedAppData'
          >
        >([['fields', tuple([getBaseAssetLinkedAppDataInitInfoSerializer()])]]),
      ],
      [
        'DataSection',
        struct<
          GetDataEnumKindContent<
            BaseExternalPluginAdapterInitInfo,
            'DataSection'
          >
        >([['fields', tuple([getBaseDataSectionInitInfoSerializer()])]]),
      ],
    ],
    { description: 'BaseExternalPluginAdapterInitInfo' }
  ) as Serializer<
    BaseExternalPluginAdapterInitInfoArgs,
    BaseExternalPluginAdapterInitInfo
  >;
}

// Data Enum Helpers.
export function baseExternalPluginAdapterInitInfo(
  kind: 'LifecycleHook',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterInitInfoArgs,
    'LifecycleHook'
  >['fields']
): GetDataEnumKind<BaseExternalPluginAdapterInitInfoArgs, 'LifecycleHook'>;
export function baseExternalPluginAdapterInitInfo(
  kind: 'Oracle',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterInitInfoArgs,
    'Oracle'
  >['fields']
): GetDataEnumKind<BaseExternalPluginAdapterInitInfoArgs, 'Oracle'>;
export function baseExternalPluginAdapterInitInfo(
  kind: 'AppData',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterInitInfoArgs,
    'AppData'
  >['fields']
): GetDataEnumKind<BaseExternalPluginAdapterInitInfoArgs, 'AppData'>;
export function baseExternalPluginAdapterInitInfo(
  kind: 'AssetLinkedLifecycleHook',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterInitInfoArgs,
    'AssetLinkedLifecycleHook'
  >['fields']
): GetDataEnumKind<
  BaseExternalPluginAdapterInitInfoArgs,
  'AssetLinkedLifecycleHook'
>;
export function baseExternalPluginAdapterInitInfo(
  kind: 'AssetLinkedAppData',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterInitInfoArgs,
    'AssetLinkedAppData'
  >['fields']
): GetDataEnumKind<BaseExternalPluginAdapterInitInfoArgs, 'AssetLinkedAppData'>;
export function baseExternalPluginAdapterInitInfo(
  kind: 'DataSection',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterInitInfoArgs,
    'DataSection'
  >['fields']
): GetDataEnumKind<BaseExternalPluginAdapterInitInfoArgs, 'DataSection'>;
export function baseExternalPluginAdapterInitInfo<
  K extends BaseExternalPluginAdapterInitInfoArgs['__kind'],
>(
  kind: K,
  data?: any
): Extract<BaseExternalPluginAdapterInitInfoArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isBaseExternalPluginAdapterInitInfo<
  K extends BaseExternalPluginAdapterInitInfo['__kind'],
>(
  kind: K,
  value: BaseExternalPluginAdapterInitInfo
): value is BaseExternalPluginAdapterInitInfo & { __kind: K } {
  return value.__kind === kind;
}
