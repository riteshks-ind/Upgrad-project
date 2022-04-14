import React, { useEffect, useState } from 'react'
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';


function Table({entries}) {

     var entry = "english";

    const [articles, setArticles] = useState([])
    const [data, setData] = useState([])
    const updateArticles = async () => {

        const url = `http://www.omdbapi.com/?apikey=77fc520a&s=${entry}`;

        let data = await fetch(url);

        let parsedData = await data.json();
        setArticles(parsedData.Search);
        setData(parsedData);
        console.log(articles)




    }

    useEffect(() => {
        updateArticles();
    }, [])


    return (

        <div className="my-8 mx-56 text-left align-middle">
            <div>
                <div className="m-30 w-[1100px] ">

                    <div className='items-end'>

                        <button className="px-3 py-1 bg-red-500 rounded-md shadow-xl text-md text-xl font-medium text-white hover:scale-110 duration-300 my-3">Sort</button>
                    </div>

                    <div className="flex justify-between text-2xl py-4 border-2">
                        <h1>View the list of the movie</h1>
                        <h3>{`Showing 10 of ${data.totalResults} results`}</h3>
                    </div>



                    <table className="w-[1100px]  h-[700px] ">

                        <tbody className="w-[1100px]">




                            <tr className="text-3xl bg-black text-white font-thin px-2 ">
                                <th>Year</th>
                                <th>Movie Title</th>
                                <th className='max-w-sm'>Movie ID</th>
                                <th>Action </th>
                                <th> </th>
                            </tr>

                            {articles.map((element) => (

                                <tr className='border-2 py-4'>
                                       
                                    <td>{element.Year}</td>
                                    <td>{element.Title}</td>

                                    <td>{element.imdbID}</td>
                                    <td>Delete</td>
                                    <th><VisibilitySharpIcon /> </th>
                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table






// 77fc520a