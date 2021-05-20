import React from 'react'
import { useState, useEffect } from 'react'

const ProductsList = () => {
  const [find, setFind] = useState([])
  const [des, setDes] = useState([])
  const [total, setTotal] = useState(0)
  const [checked, setChecked] = useState([
    {
      checked: true,
      id: 1,
      imeProizvoda: 'melem 1',
      opisproizvoda: 'melem za lice',
      cijena: 2.5,
    },
    {
      checked: true,
      id: 2,
      imeProizvoda: 'melem 2',
      opisproizvoda: 'melem za ruke',
      cijena: 3.5,
    },
    {
      checked: true,
      id: 3,
      imeProizvoda: 'melem 3',
      opisproizvoda: 'melem za kozu',
      cijena: 4.5,
    },
    {
      checked: true,
      id: 4,
      imeProizvoda: 'med ',
      opisproizvoda: 'sumski med',
      cijena: 2.8,
    },
    {
      checked: true,
      id: 5,
      imeProizvoda: 'sir',
      opisproizvoda: 'kozji sir',
      cijena: 2,
    },

    {
      checked: true,
      id: 6,
      imeProizvoda: 'rakija',
      opisproizvoda: 'travarica',
      cijena: 5,
    },
  ])

  const checkedOne = (e) => {
    let copy = [...checked]
    let index = copy.indexOf(e)
    copy[index].checked = !copy[index].checked
    setChecked(copy)
  }

  const checkedAll = (e) => {
    let a = e.target.checked
    let copy = [...checked]
    for (let i = 0; i < copy.length; i++) {
      copy[i].checked = a
    }

    setChecked(copy)
  }

  const sum = () => {
    let a = checked.filter((item) => item.checked)
    let b = a.reduce((sum, item) => sum + item.cijena, 0)
    setTotal(b)
  }

  let names = []

  for (let i = 0; i < checked.length; i++) {
    names.push(checked[i].imeProizvoda)
  }

  let description = []

  for (let i = 0; i < checked.length; i++) {
    description.push(checked[i].opisproizvoda)
  }
  const filter = (letter, name, setST) => {
    name.sort()

    if (letter.length > 0) {
      let x = new RegExp('^' + letter)
      let res = name.filter((item) => item.match(x))
      setST(res)
    } else {
      setST([])
    }
  }
  useEffect(() => {}, [find])
  return (
    <div className='items-center divide-y '>
      <div className='divide-x '>
        <input
          className='bg-gray-100 text-center w-28 ml-1'
          type='number'
          placeholder='id'
        />
        <input
          onChange={(e) => filter(e.target.value, names, setFind)}
          className='bg-gray-100 text-center'
          type='text'
          placeholder='find by name'
        />
        <input
          onChange={(e) => filter(e.target.value, description, setDes)}
          className='bg-gray-100 text-center'
          type='text'
          placeholder='filter'
        />
        <input
          className='bg-gray-100 text-center w-28'
          type='text'
          placeholder='filter'
        />
      </div>
      <div className='ml-32 absolute bg-gray-300 text-yellow-500 w-44 text-center'>
        {find.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className='ml-80 absolute bg-gray-300 text-yellow-500 w-44 text-center'>
        {des.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className='bg-red-100 h-8 flex items-center px-2 '>
        <input
          type='checkbox'
          onChange={(e) => {
            checkedAll(e)
            sum()
          }}
        ></input>
        <div className='m-4 flex flex-grow items-center justify-between px-2 '>
          <p>Id</p>
          <p>Ime proizvoda</p>
          <p>Opis proizvoda</p>
          <p>Cijena</p>
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </div>

      {checked.map((proizvod, index) => (
        <div key={index} className='bg-gray-500 h-8 flex items-center px-2 '>
          <input
            type='checkbox'
            checked={proizvod.checked}
            onChange={(e) => {
              checkedOne(proizvod)
              sum()
            }}
          ></input>
          <div className='m-6'>
            <p>{proizvod.id}</p>
          </div>
          <div className='ml-24 flex flex-grow items-center justify-between'>
            <p className='ml-2'>{proizvod.imeProizvoda}</p>

            <p className=''>{proizvod.opisproizvoda}</p>
            <p className=''>{proizvod.cijena}</p>
            <p>Uredi</p>
            <p>Izbrisi</p>
          </div>
        </div>
      ))}

      <p className='ml-6/12 font-bold'>Ukupna cijena je : {total} eura</p>
    </div>
  )
}
export default ProductsList
