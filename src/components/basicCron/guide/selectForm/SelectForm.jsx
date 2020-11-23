import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import MinSelect from './MinSelect'
import MonSelect from './MonSelect'
import DOMSelect from './DOMSelect'
import DOWSelect from './DOWSelect'
import HourSelect from './HourSelect'

const SelectFieldsForm = ({
  handleClear,
  handleClickClose,
  handleChange,
  select
}) => {
  const handleAllClear = () => {
    const fieldName = ['mon', 'dow', 'dom', 'hour', 'min']
    handleClear({ fieldName })
  }
  // need 5 select boxes
  // btn is for clear rather than submit
  // helper test with icon
  // Double click on a dropdown option to automatically select / unselect a periodicity
  return (
    <form>
      <span>In</span>
      <MonSelect
        handleClear={handleClear}
        select={select}
        handleChange={handleChange}
        handleClickClose={handleClickClose}
      />
      <span>On</span>

      <DOMSelect select={select} handleChange={handleChange} />
      <span>And</span>

      <DOWSelect select={select} handleChange={handleChange} />
      <span>At</span>

      <HourSelect select={select} handleChange={handleChange} />
      <span>:</span>

      <MinSelect select={select} handleChange={handleChange} />
      <button
        className={styles.guide__clearbutton}
        type='button'
        onClick={handleAllClear}
      >
        <span>Clear</span>
      </button>
    </form>
  )
}

SelectFieldsForm.propTypes = {
  handleClear: PropTypes.func.isRequired
}

export default SelectFieldsForm
