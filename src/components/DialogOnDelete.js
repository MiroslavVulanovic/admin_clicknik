import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import axios from 'axios'
const url = 'http://localhost:3000/quotes'
const DialogOnDelete = (prop) => {
  const deleteItem = (params) => {
    console.log(params)
    // axios.delete(url + '/' + 15).then((res) => console.log(params.row.id))
  }

  return (
    <div>
      <Dialog
        open={prop.isOpen}
        onClose={prop.handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Da li zelite da izbrisete ovu pouku?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={prop.handleClose} color='secondary'>
            Ne
          </Button>
          <Button onClick={deleteItem} color='primary' autoFocus>
            Da
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogOnDelete
