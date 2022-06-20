import * as React from "react";
import { Form as AntForm, FormProps as AntFormProps, FormItemProps as AntFormItemProps } from "antd";

import { default as FormItemType } from 'antd/lib/form/FormItem';
import "./style.css"

export type FormProps = AntFormProps;
export type FormItemProps = AntFormItemProps;

export const FormItem : typeof FormItemType = AntForm.Item;

const Form: React.FC<FormProps> = (props) => {
  return <AntForm {...props} />;
};

export default Form;
