import * as React from 'react'
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd'

import 'antd/lib/select/style/index.css'
import './style.css'

export type SelectProps = AntSelectProps & {
  // Option?:React.ReactElement;
}

const optionss: any[] | undefined = []
for (let i = 0; i < 100; i++) {
  const value = `${i.toString(36)}${i}`
  optionss.push({
    value,
    disabled: i === 10
  })
}

const Select: React.FC<SelectProps> = props => {
  // const { children,options,...restProps } = props;

  function handleChange(value: any) {
    // eslint-disable-next-line no-console
    console.log('Select :', value)
  }

  // // eslint-disable-next-line no-console
  // console.log("Select :",options);

  return (
    // <AntSelect
    //   defaultValue="SG"
    // 	options={options}
    //   onChange={ handleChange }
    // 	{ ...restProps }
    // >
    // {/* {children} */}
    //   {/* <AntSelect.Option value="MY">Malaysia</AntSelect.Option>
    //   <AntSelect.Option value="SG">Singapore</AntSelect.Option>
    //   <AntSelect.Option value="ID">Indonesia</AntSelect.Option> */}
    // </AntSelect>

    <AntSelect defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <AntSelect.Option value="jack">Jack</AntSelect.Option>
      <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
      <AntSelect.Option value="disabled" disabled>
        Disabled
      </AntSelect.Option>
      <AntSelect.Option value="Yiminghe">yiminghe</AntSelect.Option>
    </AntSelect>
  )
}

Select.defaultProps = {
  // Option:undefined,
}

export default Select
