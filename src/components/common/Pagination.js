import React from 'react'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'

import { ButtonCircle } from '../common'

function Pagination({ page, setPage, totalPages }) {
  const onPrev = () => setPage(page - 1)
  const onNext = () => setPage(page + 1)
  const prevDisabled = page === 1
  const nextDisabled = page === totalPages

  return (
    <div className="mt-3 d-flex justify-content-between">
      <div>
        <ButtonCircle onClick={onPrev} disabled={prevDisabled}>
          <BsCaretLeftFill />
        </ButtonCircle>
        <ButtonCircle onClick={onNext} disabled={nextDisabled}>
          <BsCaretRightFill />
        </ButtonCircle>
      </div>
      <div>Page {page}</div>
    </div>
  )
}

export default Pagination
