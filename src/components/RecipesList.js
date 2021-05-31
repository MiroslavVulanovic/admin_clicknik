import React from 'react'
import { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

const nizObjekata = [
  {
    checked: false,
    id: 1,
    imeRecepta: 'recept za kolace',
    opisRecepta: 'posno',
    vrijeme: 30,
  },
  {
    checked: false,
    id: 2,
    imeRecepta: 'recept za zito',
    opisRecepta: 'posno',
    vrijeme: 10,
  },
  {
    checked: false,
    id: 3,
    imeRecepta: 'recept za kolace',
    opisRecepta: 'mrsno',
    vrijeme: 30,
  },
  {
    checked: true,
    id: 4,
    imeRecepta: 'recept za slavski kolac',
    opisRecepta: 'posno',
    vrijeme: 15,
  },
  {
    checked: false,
    id: 5,
    imeRecepta: 'recept za kolace 1',
    opisRecepta: 'posno',
    vrijeme: 20,
  },
  {
    checked: false,
    id: 6,
    imeRecepta: 'recept za kolace 2',
    opisRecepta: 'mrsno',
    vrijeme: 25,
  },
]

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
})
export default function ProductsList() {
  const [check, setCheck] = useState(nizObjekata)
  const classes = useStyles()

  const checkAll = (e) => {
    let newCheck = [...check]
    newCheck.map((item) => (item.checked = e))
    setCheck(newCheck)
  }
  const checkOne = (e) => {
    let newCheck = [...check]
    newCheck[e - 1].checked = !newCheck[e - 1].checked
    setCheck(newCheck)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableRow>
          <TableCell padding='checkbox'>
            <Checkbox
              onChange={(e) => checkAll(e.target.checked)}
              color='primary'
            />
          </TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Id</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Naziv proizvoda</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Opis proizvoda</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Vrijeme</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Obrisi</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Uredi</TableCell>
        </TableRow>
        {check.map((item, i) => (
          <TableRow key={i}>
            <TableCell padding='checkbox'>
              <Checkbox
                color='default'
                //style={{ color: 'green' }}
                //indeterminate
                disabled={false}
                disableRipple={false}
                checked={item.checked}
                onChange={(e) => checkOne(item.id)}
              />
            </TableCell>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.imeRecepta}</TableCell>
            <TableCell>{item.opisRecepta}</TableCell>
            <TableCell>{item.vrijeme}</TableCell>
            <TableCell padding='checkbox'>
              <IconButton style={{ outline: 'none' }}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
            <TableCell padding='checkbox' align='center'>
              <IconButton style={{ outline: 'none' }}>
                <EditIcon style={{ color: '' }} />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  )
}
