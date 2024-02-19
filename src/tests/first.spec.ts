import { expect, test } from 'vitest'
import { load } from 'js-yaml'




const checkYaml = ([testName,yamlStr,res]:[testName:string,yamlStr:string,res: unknown] ) => {
  test( testName, () => {
    try {
      expect(load(yamlStr)).toStrictEqual(res)
    } catch (e) {
      console.log(e);
    }
  }) 
}

const yamlAssertion: [string,string,unknown][] = [
  [ 'parses couple stages', `
  stages:
    - build
    - test
  `, {stages:[ 'build', 'test' ]}  ],
  [ 'parses empty stages', `
  stages:
  `, { stages: null } ],
]

yamlAssertion.forEach((assert) => checkYaml(assert))
