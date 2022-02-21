import * as React from 'react'
import { AutoComplete as AntAutoComplete, AutoCompleteProps as AntAutoCompleteProps } from 'antd'

import '../assets/style/form-item.css'
import 'antd/lib/style/default.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/empty/style/index.css'
import './style.css'

export type AutoCompleteProps = AntAutoCompleteProps & {
  rounded?: true | false
}

const AutoComplete: React.FC<AutoCompleteProps> = props => {
  const { rounded, ...restProps } = props
  return <AntAutoComplete className={!rounded ? undefined : 'roundedSearch'} {...restProps}></AntAutoComplete>
}

export default AutoComplete
