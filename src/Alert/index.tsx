import * as React from 'react';
import { Alert as AntAlert, AlertProps as AntAlertProps } from 'antd';
import {
  ErrorIconSVG,
  InfoIconSVG,
  SuccessIconSVG,
  WarningIconSVG
} from '../assets/icons';

import './style.css';
import Button, { ButtonProps } from '../Button';

export type AlertProps = AntAlertProps;

export const alertWithButtons = (buttonList: any[]) => {
  return (
    <div className={'flex flex-col'}>
      {buttonList.map((button: ButtonProps) => (
        <Button {...button} />
      ))}
    </div>
  );
};

const Alert: React.FC<AlertProps> = props => {
  const { icon, type } = props;

  // icons are different based on whether they
  // have description prop or not, this function
  // standardises them
  const iconType = () => {
    if (type === 'success') return <SuccessIconSVG />;
    else if (type === 'info') return <InfoIconSVG />;
    else if (type === 'warning') return <WarningIconSVG />;
    else if (type === 'error') return <ErrorIconSVG />;
    else return icon;
  };
  return <AntAlert icon={iconType()} {...props} />;
};

export default Alert;
