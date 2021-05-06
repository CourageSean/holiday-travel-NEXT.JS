
import DiscoverList from "../comps/DiscoverList"





export default function Destination({data}) {
console.log(data)
    return (
        <div>
           <DiscoverList data={data}/>
        </div>
    )
}


export const getStaticProps = async () => {
    // /?location=${location}&activity=${activity
  const response = await fetch(`http://localhost:5003/explore`)
  const data = await response.json()
  
      console.log("hey server")
  return {
      props:{
       data
      }
  }
}