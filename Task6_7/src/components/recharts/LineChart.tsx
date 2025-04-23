import axios from 'axios';
import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const RenderLineChart = () => {
    interface Coin {
        symbol: string,
        price: number,
        rank: number,
        
    }
   
    const [coins, setCoins] = useState<Coin[]>([])

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins?limit=6&offset=1',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl'
        },
        headers: {
          'x-rapidapi-key': '680964f3cfmsh9f03dab6ce752d2p19be55jsn2a91b04ecaa1',
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.request(options);
               
               const {coins} = data.data
                console.log(coins)
                const descData = coins.map(({symbol, price, rank}: Coin)  => ({symbol, price, rank}))
                setCoins(descData)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [])
    
  return (
    <div className='flex flex-col gap-4'>
        <h1>Line Chart</h1>
       
       <LineChart width={500} height={300} data={coins}>
            <Line dataKey='rank' stroke='#0f0'/>
           
            {/* <Line type='monotone' dataKey='rank' stroke='#8884d8' /> */}
            <CartesianGrid strokeDasharray='5 5'/>
            <XAxis dataKey='symbol' />
            <YAxis width={100}/>
            <Tooltip/>
            <Legend />
        </LineChart>
        <h1>Bar Chart</h1>
        <BarChart  width={500} height={300} data={coins}>
          <Bar dataKey='rank' stroke='#0f0'/>
          <CartesianGrid strokeDasharray='5 5'/>
            <XAxis dataKey='symbol' />
            <YAxis width={100}/>
            <Tooltip/>
            <Legend />
        </BarChart>
       
        
    </div>
  )
}

export default RenderLineChart