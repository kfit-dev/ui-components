import * as React from "react";
import { PageHeader as AntPageHeader, PageHeaderProps as AntPageHeaderProps } from '@ant-design/pro-layout';

import "./style.css"

export type PageHeaderProps = AntPageHeaderProps;

export type PageHeaderWrapperProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
};

export const PageHeaderWrapper : React.FC<PageHeaderWrapperProps> = (props) => {
  const { title, subtitle } = props;

  return(
    <div className='ui-page-header'>
      <span className="ui-page-header-title">{title}</span>
      { subtitle && <span className="ui-page-header-subtitle">{subtitle}</span> }
    </div>
  );
}

// todo: create an alternative component for this.
/**
 * @deprecated deprecated in antd v5.0. It is used from compatibility package. consider using an alternative component
 */
const PageHeader: React.FC<PageHeaderProps> = props => {
  const { title, subTitle, ...restProps } = props
  return <AntPageHeader title={<PageHeaderWrapper title={title} subtitle={subTitle} />} {...restProps} />
}

export default PageHeader
