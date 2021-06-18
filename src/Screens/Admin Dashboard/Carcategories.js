import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import {
  addcompany,
  addcar,
  getcars,
  getcompany,
  addvariant,
} from '../../Helpers/carcategory'

const Carcategories = () => {
  const [categoriesInputs, setCategoriesInputs] = useState({
    company: '',
    car: '',
    variant: '',
  })
  const [idHolder, setIdHolder] = useState({
    companyId: '',
    carId: '',
  })

  const { companyId, carId } = idHolder

  const { company, car, variant } = categoriesInputs
  const [carList, setCarList] = useState([])
  const [companyList, setCompanyList] = useState([])

  const [reRenderCars, setReRenderCars] = useState(false)
  const [reRenderCompanies, setReRenderCompanies] = useState(false)

  const [carName, setcarName] = useState('')
  const [companyId2, setcompanyId2] = useState('')
  const [carId2, setcarId2] = useState('')
  const [carVariant, setcarVariant] = useState('')

  console.log(carList)
  // console.log(companyList)

  useEffect(() => {
    getcompany()
      .then((data) => {
        if (data.error) {
          return setCompanyList([])
        }
        return setCompanyList(data)
      })
      .catch((err) => console.log(err))
  }, [reRenderCompanies])
  useEffect(() => {
    companyId2 !== '' &&
      getcars(companyId2)
        .then((data) => {
          if (data.error) {
            console.log(data.error)
          }
          return setCarList(data)
        })
        .catch((err) => console.log(err))
  }, [reRenderCars])

  const handelAddCompany = () => {
    const val = { name: company }
    addcompany(val)
      .then((data) => {
        if (data.error) {
          return toast.warning(data.error, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          })
        }
        setReRenderCompanies(!reRenderCompanies)
        setCategoriesInputs({ ...categoriesInputs, company: '' })
      })
      .catch((err) => console.log(err))
  }

  const handelAddCar = (e) => {
    e.preventDefault()
    const val = { name: carName, company: companyId2 }
    addcar(val)
      .then((data) => {
        if (data.error) {
          return toast.warning(data.error, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          })
        }
        setReRenderCars(!reRenderCars)
        setcarName('')
      })
      .catch((err) => console.log(err))
  }

  const onchangeCompanyHandler = (id) => {
    getcars(id)
      .then((data) => {
        if (data.error) {
          console.log(data.error)
        }
        return setCarList(data)
      })
      .catch((err) => console.log(err))
  }

  const handelAddVariant = (e) => {
    e.preventDefault()
    const val = { name: carVariant, car: setcarId2 }
    addvariant(val)
      .then((data) => {
        if (data.error) {
          return toast.warning(data.error, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          })
        }
        setReRenderCars(!reRenderCars)
        setcarVariant('')
      })
      .catch((err) => console.log(err))
  }

  const handelInputs = (name) => (event) => {
    setCategoriesInputs({ ...categoriesInputs, [name]: event.target.value })
  }

  return (
    <div
      style={{ padding: '10px' }}
      className='d-flex flex-column align-items-center'
    >
      <span className='display-4'>Car Manager</span>

      <div className='row w-100 mt-4 d-flex flex-column align-items-center '>
        <div className='col-md-6'>
          <input
            type='text'
            className='form-control'
            placeholder='Company Name *'
            onChange={handelInputs('company')}
            value={company}
          />
        </div>

        <div className='row'>
          <div className='col mt-2'>
            <button className='btn btn-success' onClick={handelAddCompany}>
              {' '}
              Add Company
            </button>
          </div>
        </div>
        <div className='col-md-2'></div>
      </div>
      <div className='row w-100 mt-4 d-flex flex-column align-items-center '>
        <span className='display-4'>OR</span>
      </div>
      <div className='row w-100 mt-4 d-flex flex-column align-items-center'>
        <div className='row'>
          <div className='col-md-6'>
            <select
              className='form-control'
              onChange={(e) => {
                setcompanyId2(e.target.value)
              }}
              value={companyId2}
            >
              <option className='hidden' selected disabled>
                Comapny Name
              </option>
              {companyList?.map((comp) => (
                <option className='hidden' value={comp._id} key={comp._id}>
                  {comp.name}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              className='form-control'
              placeholder='Car Name *'
              value={carName}
              onChange={(e) => setcarName(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col mt-2'>
            <button className='btn btn-success' onClick={handelAddCar}>
              {' '}
              Add Car
            </button>
          </div>
        </div>
        <div className='col-md-2'></div>
      </div>
      <div className='row w-100 mt-4 d-flex flex-column align-items-center '>
        <span className='display-4'>OR</span>
      </div>
      <div className='row w-100 mt-4 d-flex flex-column align-items-center '>
        <div className='row'>
          <div className='col-md-4'>
            <select
              className='form-control'
              onChange={(e) => onchangeCompanyHandler(e.target.value)}
            >
              <option className='hidden' selected disabled>
                Comapny Name
              </option>
              {companyList?.map((comp) => (
                <option className='hidden' value={comp._id} key={comp._id}>
                  {comp.name}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-4'>
            <select
              className='form-control'
              onChange={(e) => setcarId2(e.target.value)}
            >
              <option className='hidden' selected disabled>
                Car name
              </option>
              {carList?.map((comp) => (
                <option className='hidden' value={comp._id} key={comp._id}>
                  {comp.name}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-4'>
            <input
              type='text'
              className='form-control'
              placeholder='Car variant *'
              value={carVariant}
              onChange={(e) => setcarVariant(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col mt-2'>
            <button className='btn btn-success' onClick={handelAddVariant}>
              Add Variant
            </button>
          </div>
        </div>
        <div className='col-md-2'></div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Carcategories
