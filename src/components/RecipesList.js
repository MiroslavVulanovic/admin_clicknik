import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import React from 'react'
import { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'

import Button from '@material-ui/core/Button'

const url = 'http://localhost:3000/quotes'

const editButton = (params) => {
  return (
    <strong>
      <Button
        variant='contained'
        size='small'
        style={{ marginLeft: 16, color: 'gray' }}
        onClick={() => {
          console.log('nesto')
          //parseName(params.row.col6)
        }}
      >
        <EditIcon />
      </Button>
    </strong>
  )
}
const deleteButton = (params) => {
  return (
    <strong>
      <Button
        variant='contained'
        size='small'
        style={{ marginLeft: 16, color: 'gray' }}
        onClick={() => {
          console.log('nesto')
          //parseName(params.row.col6)
        }}
      >
        <DeleteIcon />
      </Button>
    </strong>
  )
}

const col = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 160 },
  { field: 'author', headerName: 'Author', width: 180 },
  { field: 'content', headerName: 'Content', width: 180 },

  {
    field: 'Uredi',
    headerName: 'Uredi',

    width: 120,
    renderCell: editButton,
    valueGetter: (params) => {
      return
    },
  },
  {
    field: 'Obrisi',
    headerName: 'Obrisi',
    width: 120,
    renderCell: deleteButton,
  },
]

export default function ProductsList() {
  const [obj, setObj] = useState({
    post: [],
    pageSize: 10,
    totalItems: 10,
    currentPage: 0,
  })

  const fetchData = async () => {
    const quotes = await axios(
      url +
        '?perPage=' +
        obj.pageSize +
        '&offset=' +
        obj.currentPage * obj.pageSize
    )
    setObj({
      ...obj,
      post: [...obj.post, ...quotes.data.data],
      totalItems: quotes.data.itemsTotal,
    })
  }

  useEffect(() => {
    fetchData()
  }, [obj.currentPage])

  const changePage = (ob) => {
    if (ob.page > obj.currentPage) {
      setObj({ ...obj, currentPage: ob.page })
    }
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={obj.post}
        columns={col}
        rowCount={obj.totalItems}
        pageSize={obj.pageSize}
        checkboxSelection
        //page={2}
        //loading={true}
        //aria-label='simple table'
        //autoPageSize={true}
        //onPageChange={function}
        onPageChange={changePage}
        //autoPageSize={true}
        //pagination
        //{...post}
      />
    </div>
  )
}
