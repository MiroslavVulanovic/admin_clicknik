import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import CircularProgress from '@material-ui/core/CircularProgress'

const url = 'http://localhost:3000/quotes'

const Quotes = (prop) => {
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [objectOfStates, setObjectOfStates] = useState({
    post: [],
    pageSize: 5,
    totalItems: 10,
    currentPage: 0,
  })
  const editButton = (params) => {
    return (
      <button className='focus:outline-none'>
        <EditIcon fontSize='small' />
      </button>
    )
  }
  const deleteButton = (params) => {
    return (
      <button className='focus:outline-none'>
        <DeleteIcon
          onClick={() => {
            setOpenDialog(true)
            setId(params.id)
          }}
          fontSize='small'
        />
      </button>
    )
  }
  const handleClose = () => {
    setOpenDialog(false)
    setLoading(false)
  }

  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      flex: 0.3,
      sortable: false,
      renderCell: (params) => {
        return <div className='ml-2'>{params.value}</div>
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

  const fetchData = () => {
    setLoading(true)
    axios(
      url +
        '?perPage=' +
        objectOfStates.pageSize +
        '&offset=' +
        objectOfStates.currentPage * objectOfStates.pageSize
    ).then((quotes) => {
      setObjectOfStates({
        ...objectOfStates,
        post: objectOfStates.post.concat(quotes.data.data),
        totalItems: quotes.data.itemsTotal,
      })
      setLoading(false)
    })
  }
  const changePage = (params) => {
    if (params.page > objectOfStates.currentPage) {
      setObjectOfStates({ ...objectOfStates, currentPage: params.page })
    }
  }
  useEffect(() => {
    fetchData()
  }, [objectOfStates.currentPage])

  const deleteItem = () => {
    setLoading(true)
    axios
      .delete(url + '/' + id, {
        headers: {
          authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFudG9uaWplIiwiaWF0IjoxNjIzNzg0MDEwLCJleHAiOjE2MjM3ODc2MTB9.dyCmZE97SSRqlbv6gAGpAzBVwcr0lteFuWXsam1fTnw',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        let newArrayOfPost = objectOfStates.post.filter(
          (item) => item.id !== id
        )

        setObjectOfStates({
          ...objectOfStates,
          post: newArrayOfPost,
          totalItems: objectOfStates.totalItems - 1,
        })
        setLoading(false)
        handleClose()
      })
    /* .catch((error) => console.log(error))
    setLoading(false)
    handleClose() */
  }
  console.log(objectOfStates.pageSize)
  return (
    <div className='container bg-blue-100 h-full'>
      <div className='flex justify-start mx-12 mt-4'>
        <Autocomplete
          id='combo-box-demo'
          options={[
            {
              id: 4,
              title: 'Химна љубави',
              content:
                '1. Ако језике човјечије и анђеоске говорим, а љубави немам, онда сам као звоно које јечи, или кимвал који звечи.\n',
              author: 'Св. апостол Павле',
              filename:
                'http://localhost:3000/upload/images/ae3686268b4b3e95c6bb5e8c64685419-SLIKA 18.jpg',
              createdAt: '2021-04-13T17:53:10.625Z',
              updatedAt: '2021-04-13T17:53:10.625Z',
            },
          ]}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Search' variant='outlined' />
          )}
        />
      </div>
      <div className='bg-gray-400 mt-4 mx-4 shadow-xl' style={{ height: 400 }}>
        <DataGrid
          rows={objectOfStates.post}
          columns={columns}
          rowCount={objectOfStates.totalItems}
          pageSize={objectOfStates.pageSize}
          checkboxSelection
          //disableColumnMenu
          //page={2}
          loading={loading}
          //aria-label='simple table'
          //autoPageSize={true}

          onPageChange={changePage}
          //components={{
          //Toolbar: GridToolbar,
          // }}
          //pagination
          //autoHeight
          onRowSelected={(e) => console.log(e.data.id)}
          disableSelectionOnClick
          //disableColumnSelector
        />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Da li zelite da izbrisete ovu pouku?
          </DialogContentText>
          {loading && (
            <CircularProgress
              className='ml-28 absolute'
              disableShrink
              size={40}
              value={50}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            Ne
          </Button>
          <Button
            onClick={() => {
              deleteItem()
            }}
            color='primary'
            autoFocus
          >
            Da
          </Button>
        </DialogActions>
      </Dialog>
      <div className='ml-4 mt-4'>
        <Button variant='contained' color='primary'>
          Delete
        </Button>
      </div>
    </div>
  )
}
export default Quotes
