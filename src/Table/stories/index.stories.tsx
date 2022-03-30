import React, { useState } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { Space } from 'antd'
import { TableRowSelection } from 'antd/lib/table/interface'

import { parseISO, format as fnFormat, differenceInMilliseconds } from 'date-fns'

import Button from '../../Button'
import { default as Tag } from '../../Tag/index'
import { default as Table, TableProps } from '../index'

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    size: {
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' }
    },
    checked: {
      options: ['checked?'],
      control: { type: 'check' }
    },
    withFooter: {
      options: ['Footer'],
      control: { type: 'check' }
    }
  }
} as ComponentMeta<typeof Table>

const format = (date: string) => fnFormat(typeof date === 'string' ? parseISO(date) : date, 'dd MMM yyyy')

enum SubmissionStatus {
  NotStarted,
  Submitted,
  Approved
}

type RecordType = {
  key: string
  submissionDate: string
  merchantName: string
  outletlocation: string
  sbmissionStatus: SubmissionStatus
}

type ArgsType = TableProps<RecordType> & {
  label: string
  checked?: string[]
  withFooter: string[]
}

const dataSource = [
  {
    key: '1',
    submissionDate: new Date(2022, 1, 3).toISOString(),
    merchantName: 'Dunkin Donuts',
    outletlocation: 'Subang Jaya',
    sbmissionStatus: SubmissionStatus.NotStarted
  },
  {
    key: '2',
    submissionDate: new Date(2022, 1, 1).toISOString(),
    merchantName: 'Puma Sdn Bhd',
    outletlocation: 'One Pavilion',
    sbmissionStatus: SubmissionStatus.NotStarted
  },
  {
    key: '3',
    submissionDate: new Date(2022, 1, 2).toISOString(),
    merchantName: 'ArtFriend',
    outletlocation: 'Jaya One',
    sbmissionStatus: SubmissionStatus.NotStarted
  }
]

const nameFilters = dataSource.map(({ merchantName }) => {
  return { text: merchantName, value: merchantName }
})

const args: ArgsType = {
  size: 'large',
  checked: undefined,
  withFooter: ['Footer'],
  dataSource: dataSource,
  columns: [
    {
      title: 'Submission Date',
      dataIndex: 'submissionDate',
      render: text => <>{format(text)}</>,
      sorter: ({ submissionDate: a }, { submissionDate: b }) => differenceInMilliseconds(parseISO(a), parseISO(b))
    },
    {
      title: 'Merchant Name',
      dataIndex: 'merchantName',
      sorter: ({ merchantName: a }, { merchantName: b }) => a.localeCompare(b),
      filterMode: 'tree',
      filterSearch: true,
      filters: nameFilters,
      onFilter: (value, { merchantName }) => merchantName === value
    },
    {
      title: 'Sbmission Status',
      dataIndex: 'sbmissionStatus',
      sorter: ({ sbmissionStatus: a }, { sbmissionStatus: b }) => a - b,
      render: (_, { sbmissionStatus }) => (
        <>{sbmissionStatus === SubmissionStatus.NotStarted && <Tag color={'default'}>Not started</Tag>}</>
      )
    },
    {
      title: 'Action(s)',
      key: 'action',
      render: (_, { merchantName }) => (
        <Space size="middle">
          <a onClick={() => confirm(`cancel submission for ${merchantName}?`)}>Cancel Submission</a>
        </Space>
      )
    }
  ],
  label: 'Table'
}

const Template: Story<ArgsType> = ({ checked, withFooter, ...restProps }: ArgsType, context) => {
  const { setSelectedRows } = context

  const rowSelection: TableRowSelection<RecordType> =
    checked?.length > 0
      ? {
          type: 'checkbox',
          onChange: (selectedRowKeys: React.Key[], selectedRows: RecordType[]) => setSelectedRows(selectedRows)
        }
      : undefined

  const footerFn = withFooter?.length > 0 ? () => withFooter[0] : undefined

  return <Table rowSelection={rowSelection} footer={footerFn} {...restProps} />
}

export const Default = Template.bind({})

Default.args = {
  ...args
}

export const Checked = Template.bind({})

Checked.args = {
  ...args,
  checked: ['checked']
}

Checked.decorators = [
  Story => {
    const [selectedRows, setSelectedRows] = useState<RecordType[]>([])

    const handleClick = () =>
      confirm(`Cancel [${selectedRows.length}] submissions: ${selectedRows.map(r => r.merchantName).join(', ')}?`)

    return (
      <div
        style={{
          display: 'flex',
          flexFlow: 'column'
        }}
      >
        <Button
          style={{
            marginBottom: '10px',
            alignSelf: 'flex-end'
          }}
          type={'primary'}
          onClick={handleClick}
          disabled={selectedRows.length === 0}
        >
          Cancel submissions
        </Button>
        <Story setSelectedRows={setSelectedRows} />
      </div>
    )
  }
]
