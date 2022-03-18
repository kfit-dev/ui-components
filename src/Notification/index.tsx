import * as React from 'react';
import { notification as AntNotification } from 'antd';
import { ArgsProps, NotificationApi } from 'antd/lib/notification';
import { CheckCircle, Info, WarningCircle, XCircle } from 'phosphor-react';

import './style.css';

export type NotificationProps = NotificationApi;
const Notification = AntNotification;
const originalCalls = { ...Notification };

const iconSize = 24;

Notification.info = ({ icon, ...restArgs }: ArgsProps) =>
  originalCalls.info({ icon: icon || <Info size={iconSize} />, ...restArgs });

Notification.success = ({ icon, ...restArgs }: ArgsProps) =>
  originalCalls.success({
    icon: icon || <CheckCircle size={iconSize} />,
    ...restArgs
  });

Notification.error = ({ icon, ...restArgs }: ArgsProps) =>
  originalCalls.error({
    icon: icon || <XCircle size={iconSize} />,
    duration: 0,
    ...restArgs
  });

Notification.warning = ({ icon, ...restArgs }: ArgsProps) =>
  originalCalls.warning({
    icon: icon || <WarningCircle size={iconSize} />,
    duration: 0,
    ...restArgs
  });

export default Notification;
