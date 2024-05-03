import React, { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ABHI8769')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <table>
      <tr>
        <td>Picture:</td>
        <td><img src={data.avatar_url} alt="User Avatar" className='h-14 w-14'/></td>
      </tr>
      <tr>
        <td>Name:</td>
      <td>{data.name}</td>
      </tr>
      <tr>
        <td>Repositories Count :- </td>
        <td>{data.public_repos}</td>
      </tr>
      <tr>
        <td >GitHub Id :- </td>
        <td>#{data.id}</td>
      </tr>
      <tr>
        <td>Link to GitHub Profile :- </td>
        <td className="font-semibold text-blue-600 transition-all duration-200 hover:underline"><a href={data.html_url} >Github</a></td>
      </tr>
      <tr>
        <td>Followers Count:- </td>
        <td>{data.followers}</td>
      </tr>
    </table>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/ABHI8769');
    return res.json();
}
