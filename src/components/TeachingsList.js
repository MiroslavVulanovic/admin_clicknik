import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'

const url = 'http://localhost:3000/quotes'

const editButton = (params) => {
  return (
    <button>
      <EditIcon fontSize='small' />
    </button>
  )
}
const deleteButton = (params) => {
  return (
    <button>
      <DeleteIcon fontSize='small' />
    </button>
  )
}

const columns = [
  {
    field: 'id',
    headerName: 'Id',
    flex: 0.3,
    sortable: false,
    renderCell: (params) => {
      return <div className='ml-2 cursor-pointer'>{params.value}</div>
    },
  },
  {
    field: 'title',
    headerName: 'Title',
    flex: 1,
  },
  { field: 'author', headerName: 'Author', flex: 1 },
  {
    field: 'content',
    headerName: 'Content',
    flex: 1.5,
    description: 'Sadrzaj',
    //cellClassName: 'bg-red-200',
  },

  {
    field: 'Uredi',
    headerName: 'Uredi',
    sortable: false,
    align: 'center',
    width: 70,
    renderCell: editButton,
  },
  {
    field: 'Obrisi',
    headerName: 'Obrisi',
    width: 70,
    align: 'center',
    renderCell: deleteButton,
    sortable: false,
  },
]

const TeachingsList = () => {
  const [objectOfStates, setObjectOfStates] = useState({
    post: [],
    pageSize: 5,
    totalItems: 10,
    currentPage: 0,
  })

  const fetchData = async () => {
    const quotes = await axios(
      url +
        '?perPage=' +
        objectOfStates.pageSize +
        '&offset=' +
        objectOfStates.currentPage * objectOfStates.pageSize
    );
    setObjectOfStates({
      ...objectOfStates,
      post: [...objectOfStates.post, ...quotes.data.data],
      totalItems: quotes.data.itemsTotal,
    })
  }

  useEffect(() => {
    fetchData()
  }, [objectOfStates.currentPage])

  const changePage = (params) => {
    if (params.page > objectOfStates.currentPage) {
      setObjectOfStates({ ...objectOfStates, currentPage: params.page })
    }
  }

  return (
    <div>
      <DataGrid
        rows={objectOfStates.post}
        columns={columns}
        rowCount={objectOfStates.totalItems}
        pageSize={objectOfStates.pageSize}
        checkboxSelection
        //disableColumnMenu
        //page={2}
        //loading={true}
        //aria-label='simple table'
        //autoPageSize={true}

        onPageChange={changePage}
        //components={{
        //Toolbar: GridToolbar,
        // }}
        //pagination
        autoHeight
        //onRowSelected={(e) => del(e)}
        disableSelectionOnClick
        //disableColumnSelector
      />
    </div>
  )
}
export default TeachingsList
