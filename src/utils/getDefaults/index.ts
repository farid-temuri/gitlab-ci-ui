import type {UnknownRecord,ArrayValues} from 'type-fest';
import { keywordsWithDefault } from '@/constants';

type Defaults = Partial<Record< ArrayValues<typeof keywordsWithDefault>,unknown>> 

function isObject(value: unknown): value is UnknownRecord {
	return typeof value === 'object' && value !== null;
}

const getDefaults = (
  defaults?:unknown
): Defaults | null => {
  if ( !isObject( defaults ) ) return null;


  if ( !Object.keys( defaults ).filter( ( key ) => !keywordsWithDefault.map( String ).includes( key ) ).length ) {
    return defaults // HAS keys that we don't need
  }

  return null
}

export {
	getDefaults
}