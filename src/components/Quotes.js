import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'

import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const url = 'http://localhost:3000/quotes'

const Quotes = (prop) => {
  const [alertOpen, setAlertOpen] = useState(false)
  const [numOfDelete, setNumOfDelete] = useState(0)
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [objectOfStates, setObjectOfStates] = useState({
    post: [],
    pageSize: 5,
    totalItems: 10,
    currentPage: 0,
  })
  const [offset, setOffset] = useState(
    objectOfStates.currentPage * (objectOfStates.pageSize * 2) - numOfDelete
  )
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
      url + '?perPage=' + objectOfStates.pageSize * 2 + '&offset=' + offset
    ).then((quotes) => {
      setObjectOfStates({
        ...objectOfStates,
        post: [...objectOfStates.post, ...quotes.data.data],
        totalItems: quotes.data.itemsTotal,
      })
      setLoading(false)
    })
  }
  const changePage = (params) => {
    if (params.page > objectOfStates.currentPage) {
      setObjectOfStates({ ...objectOfStates, currentPage: params.page })
      setOffset(
        (objectOfStates.currentPage + 1) * (objectOfStates.pageSize * 2) -
          numOfDelete
      )
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
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFudG9uaWplIiwiaWF0IjoxNjI1MzAzNTgwLCJleHAiOjE2MjUzMDcxODB9.IdM8nkqOTF7nHT9hF9cbljlnYwuA8EvLEqS6JJvGnWE',
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
        setNumOfDelete(numOfDelete + 1)
        handleClose()
      })

      .catch((error) => {
        setAlertOpen(true)
        console.log(error)
        handleClose()
      })
  }

  return (
    <div className='container bg-blue-100 h-full'>
      {alert && (
        <Snackbar
          open={alertOpen}
          autoHideDuration={5000}
          onClose={() => setAlertOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setAlertOpen(false)}
            variant='filled'
            severity='warning'
          >
            Problem sa mrezom!
          </Alert>
        </Snackbar>
      )}
      <div className='flex justify-between mx-4 mt-4'>
        <TextField
          size='small'
          variant='outlined'
          label='Search'
          type='search'
        ></TextField>
        <Button variant='contained' color='primary'>
          Delete
        </Button>
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
            {loading ? <CircularProgress size={20} value={50} /> : 'Da'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default Quotes
