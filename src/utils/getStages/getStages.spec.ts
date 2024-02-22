import { expect, test } from 'vitest'
import { getStages } from './index'

test( 'check default stages', () => {
  const resultStages = getStages( [] )
  
  expect(resultStages).toEqual([ '.pre', 'build', 'test', 'deploy', '.post'])
})

test( 'check new stage', () => {
  const resultStages = getStages( ['revert'] )
  
  expect(resultStages).toEqual([ '.pre', 'build', 'test', 'deploy', '.post','revert'])
})

test( 'check mixed stages', () => {
  const resultStages = getStages( ['build', 'revert'] )
  
  expect(resultStages).toEqual([ '.pre', 'build', 'test', 'deploy', '.post', 'revert'])
})

test( 'check existing stages', () => {
  const resultStages = getStages( [ 'build' ] )
  
  expect(resultStages).toEqual([ '.pre', 'build', 'test', 'deploy', '.post'])
})
