function MainList({ data }) {
  return (
    <div className="main-list">
      {data.map((item, index) => {
        return (
          <div className="list-card" key={index}>
            <h1 className="name">{item.name}</h1>
            <p className="description">{item.description}</p>
            <p className="model">
              {item.manufacturer ? 
              `Manufacturer ${item.manufacturer} ` : 
              `${item.catalog} catalog ` || ''} 
              Part Number: <span>{item.part_number}</span>
            </p>
            <p className="additional-info">
              {item.similar_catalog.found_in ? 'Found' : 'Also found'} in {item.similar_catalog.found_in} catalog and {item.similar_catalog.others} others
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default MainList