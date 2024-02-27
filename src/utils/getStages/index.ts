import { defatultStages } from '@/constants'

const getStages = ( parsedStages?: string[] ) => {
	const res = [ ...defatultStages ]
	
	if ( !parsedStages ) return res
	
	parsedStages.forEach( ( parsedStage ) => {
		if ( res.includes( parsedStage ) ) {
			return
		}
		
		res.push(parsedStage)
	})
	return res
}

export {
	getStages
}
