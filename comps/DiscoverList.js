

export default function DiscoverList({data}) {
    return (
        <div>
           <h1>Destinations</h1>
            { data.data.map(elt =>
            <div key={elt._id}ki>
                 <h3 >{elt.country}</h3>
                 <img src={`${elt.imageUrl}`} alt=""/>
                 </div>
                 ) }
        </div>
    )
}
