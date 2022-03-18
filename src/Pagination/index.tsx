import * as React from 'react'
import { Pagination as AntPagination, PaginationProps as AntPaginationProps } from 'antd'
import { CaretLeft, CaretRight } from 'phosphor-react'
import './style.css'

export type PaginationProps = AntPaginationProps & {
  LeftIcon: React.ReactNode
  RightIcon: React.ReactNode
}

const createItemRender = (LeftIcon: React.ReactNode, RightIcon: React.ReactNode) => (
  page: React.ReactNode,
  type: string,
  originalElement: React.ReactNode
) => {
  if (type === 'prev') {
    return LeftIcon
  }
  if (type === 'next') {
    return RightIcon
  }
  return originalElement
}

const Pagination: React.FC<PaginationProps> = ({ LeftIcon, RightIcon, ...restProps }) => {
  return <AntPagination {...restProps} itemRender={createItemRender(LeftIcon, RightIcon)} />
}

Pagination.defaultProps = {
  RightIcon: <CaretRight size={16} />,
  LeftIcon: <CaretLeft size={16} />
}

export default Pagination
