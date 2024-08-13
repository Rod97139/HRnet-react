import { useState } from "react"
import './ReactDataTable.css'

const ReactDataTable = ({data}) => {

    const [filteredData, setFilteredData] = useState(data)

    const [searchValue, setSearchValue] = useState('')

    const [perPage, setPerPage] = useState(10)

    //nombre de pages
    const pageCount = Math.ceil(filteredData.length / perPage)

    const [page, setPage] = useState(1)
    const [offset, setOffset] = useState(0)
    const displaiedData = filteredData.slice(offset, offset + perPage)

    const handleSort = (e) => {
        const key = e.target.id
        // passer tout les classes des element th a none exepter l'element cliqué
        document.querySelectorAll('.data-table-sorter').forEach(item => {
            if (item !== e.target) {
                item.classList.remove('asc')
                item.classList.remove('dsc')
                if (item.classList.contains('none')) {
                    return
                }
                item.classList.add('none')
            }
        })
        if (e.target.classList.contains('asc')) {
            e.target.classList.remove('asc')
            e.target.classList.toggle('dsc')
            const sortedData = [...filteredData].sort((a, b) => {
                if (a[key] > b[key]) {
                    return -1
                }
                if (a[key] < b[key]) {
                    return 1
                }
                return 0
            })
            setFilteredData(sortedData)
            return
        }

        if (e.target.classList.contains('dsc')) {
            e.target.classList.remove('dsc')
            e.target.classList.toggle('none')
            if (searchValue.length === 0) {
                setFilteredData(data)
                return
            }
            searchItem(searchValue)
            return
        }

        if (e.target.classList.contains('none')) {
            e.target.classList.remove('none')
            e.target.classList.toggle('asc')
            const sortedData = [...filteredData].sort((a, b) => {
                if (a[key] < b[key]) {
                    return -1
                }
                if (a[key] > b[key]) {
                    return 1
                }
                return 0
            })
            setFilteredData(sortedData)
            return
        }
    }



    const handleNext = () => {
        if (page === pageCount) {
          return;
        }
        setPage(page + 1);
        setOffset(Number(offset) + Number(perPage));
        
      };
    
      const handlePrev = () => {
        if (page === 1) {
          return;
        }
        setPage(page - 1);
        setOffset(offset - perPage);
      };


    const searchItem = (inputValue) => {
        
        setSearchValue(inputValue)

        if (inputValue.length === 0) {
            setFilteredData(data)
            return
        }

        const filteredData = data.filter(item => {
            return Object.values(item).some(value => 
                value.toLowerCase().includes(inputValue.toLowerCase())
            )
        })
        setPage(1)
        setOffset(0)
        setFilteredData(filteredData)
    }

  return (
    <div className="data-table-container">
        { data.length === 0 ? <p>No data available</p> : 
        <>
         <div className="data-table-search-bar">
            <div className="data-table-length">
                <label htmlFor="data-table-length">Show</label>
                <select onChange={(e) => {
                    setPerPage(Number(e.target.value))
                    setPage(1)
                    setOffset(0)
                    }} name="data-table-length" id="data-table-length">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <label htmlFor="data-table-length">entries</label>
            </div>
            <div className="data-table-filter">
                <input onChange={(e)=> searchItem(e.target.value)} type="text" placeholder="Search by Name" />
            </div>
          </div>
        <table className="data-table-body">
            <thead className="data-table-header">
                <tr>
                    {data.length > 0 && Object.keys(data[0]).map((key, index) => {
                        return <th onClick={handleSort} className="data-table-sorter none" id={key} key={index}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) =>  str.toUpperCase())}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 && displaiedData.map((item, index) => {
                    return (
                        <tr key={index}>
                            {Object.values(item).map((value, index) => {
                                return <td key={index}>{value}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className="data-table-info">
            <p>Showing {Number(offset) + 1} to {(offset + perPage < filteredData.length) ? Number(offset + perPage) : filteredData.length} of {filteredData.length} entries</p>
        </div>
        <div className="data-table-paginate">
        { pageCount > 1 && <>
            { page > 1 &&
                <button onClick={handlePrev} >Prev</button>
            }
            {Array(pageCount).fill(0).map((_, index) => {
                if (index + 1 === page) {
                    return <button key={index} className="active" onClick={() => {
                        setPage(index + 1)
                        setOffset(index * perPage)
                    }}>{index + 1}</button>
                } else {
                    return <button key={index} onClick={() => {
                        setPage(index + 1)
                        setOffset(index * perPage)
                    }}>{index + 1}</button>
                }
            })}

            { page < pageCount &&
                <button onClick={handleNext} >Next</button>
                }
            </>
        }
        </div>
       </> 
       }
    </div>
  )
}

export default ReactDataTable
