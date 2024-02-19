import { expect, test } from 'vitest'
import { getStages } from './index'

test( 'check default stages', () => {
  const resultStages = getStages( [] )
  
  expect(resultStages).toEqual([ '.pre', 'build', 'test', 'deploy', '.post'])
} )

test( 'check new stage', () => {
  const resultStages = getStages( ['revert'] )
  
  expect(resultStages).toEqual([ '.pre', 'build', 'test', 'deploy', '.post','revert'])
})