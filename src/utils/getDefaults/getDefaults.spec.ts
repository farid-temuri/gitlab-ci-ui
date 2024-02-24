import { expect, test } from 'vitest'
import { getDefaults } from './index'
import { load } from 'js-yaml'
import { keywordsWithDefault } from './../../constants';


test( 'get all defaults', () => {
	const testYml = `default:
 ${ keywordsWithDefault.map( ( key ) =>
 `${ key }:
  - some script
 `).join( '' ) }`
	
	expect( getDefaults( load( testYml ).default ) ).toEqual( keywordsWithDefault.reduce( ( oldVal, key ) => {
		oldVal[key] = ['some script']
		return oldVal
	}, {} as any))
} )

test( 'get incomplete defaults', () => {
	const testYml = `
default:
 hooks:
  - some script
 id_tokens:
  - some script
	`

	expect(getDefaults( load( testYml ).default )).toEqual({
		hooks: [ 'some script' ],
		id_tokens: [ 'some script' ],
	})
} )

test( 'get default with incorrect key', () => {
	const testYml = `
default:
 after_script:
  - some script
 unknown_key:
  - some script
`

	expect(getDefaults( load( testYml ).default )).toEqual(null)
})
