import { PublicKey } from '@metaplex-foundation/umi';
import { BaseExternalPluginKey } from '../generated';
import { PluginAuthority, pluginAuthorityToBase } from './pluginAuthority';

export type ExternalPluginKey =
  | {
      type: 'Oracle';
      baseAddress: PublicKey;
    }
  | {
      type: 'DataStore';
      dataAuthority: PluginAuthority;
    }
  | {
      type: 'LifecycleHook';
      hookedProgram: PublicKey;
    };

export function externalPluginKeyToBase(
  e: ExternalPluginKey
): BaseExternalPluginKey {
  if (e.type === 'Oracle') {
    return {
      __kind: 'Oracle',
      fields: [e.baseAddress],
    };
  }
  if (e.type === 'DataStore') {
    return {
      __kind: 'DataStore',
      fields: [pluginAuthorityToBase(e.dataAuthority)],
    };
  }
  return {
    __kind: 'LifecycleHook',
    fields: [e.hookedProgram],
  };
}
