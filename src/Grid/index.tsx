import * as React from 'react';
import {
  Grid as AntGrid,
  Col as AntCol,
  Row as AntRow,
  ColProps as AntColProps,
  RowProps as AntRowProps
} from 'antd';

import './style.css';

export const { useBreakpoint } = AntGrid;

export type GridColProps = AntColProps;
export type GridRowProps = AntRowProps;

export const GridCol: React.FC<GridColProps> = props => <AntCol {...props} />;
export const GridRow: React.FC<GridColProps> = props => <AntRow {...props} />;
