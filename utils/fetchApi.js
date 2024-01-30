import axios from 'axios'

export const baseUrl = "bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
	const {data} = await axios.get((url),{
		headers: {
		    'X-RapidAPI-Key': '73290988a2msh519762a372f5978p198cdajsnf709f0206c4e',
		    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
		 }
	})
	return data
}