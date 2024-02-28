import { expect, test } from 'vitest'
import { getStages } from './index'
import { defatultStages } from '@/constants'

test( 'check default stages', () => {
  const resultStages = getStages( [] )
  
  expect(resultStages).toEqual(defatultStages)
} )

test( 'check empty stages', () => {
  const resultStages = getStages( undefined )
  
  expect(resultStages).toEqual(defatultStages)
})

test( 'check new stage', () => {
  const resultStages = getStages( ['revert'] )
  
  expect(resultStages).toEqual(defatultStages)
})

test( 'check mixed stages', () => {
  const resultStages = getStages( [defatultStages[1], 'revert'] )
  
  expect(resultStages).toEqual([...defatultStages, 'revert'])
})

test( 'check existing stages', () => {
  const resultStages = getStages( [defatultStages[1]] )
  
  expect(resultStages).toEqual(defatultStages)
})
