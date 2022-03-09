import * as React from 'react';
import { Empty as AntEmpty, EmptyProps as AntEmptyProps } from 'antd';

import 'antd/lib/empty/style/index.css';
import './style.css';
import {
  AddMoreSVG,
  CantFindAnythingSVG,
  NoBankAccountSVG,
  NoOutletSVG,
  NothingHereSVG,
  SeemsEmptySVG
} from '../assets/icons';

export type EmptyProps = AntEmptyProps & {
  emptyType:
    | 'nothing-here'
    | 'no-outlet'
    | 'no-bank-account'
    | 'cant-find-anything'
    | 'add-more'
    | 'seems-empty';
};

const Empty: React.FC<EmptyProps> = ({
  emptyType,
  image,
  description,
  ...props
}) => {
  const emptyImage = () => {
    if (emptyType === 'nothing-here') {
      return <NothingHereSVG />;
    } else if (emptyType === 'no-outlet') {
      return <NoOutletSVG />;
    } else if (emptyType === 'no-bank-account') {
      return <NoBankAccountSVG />;
    } else if (emptyType === 'cant-find-anything') {
      return <CantFindAnythingSVG />;
    } else if (emptyType === 'add-more') {
      return <AddMoreSVG />;
    } else if (emptyType === 'seems-empty') {
      return <SeemsEmptySVG />;
    } else {
      return image;
    }
  };

  const emptyDescription = () => {
    if (emptyType === 'nothing-here') {
      return (
        <>
          <p className="preset-paragraph-1">{`Nothing here yet, nada.`}</p>
          <p className="preset-paragraph-2">{`Check back later, it might appear.`}</p>
        </>
      );
    } else if (emptyType === 'no-outlet') {
      return (
        <>
          <p className="preset-paragraph-1">{`Why no outlet eh?`}</p>
          <p className="preset-paragraph-2">{`Click on the plus button to add outlets.`}</p>
        </>
      );
    } else if (emptyType === 'no-bank-account') {
      return (
        <>
          <p className="preset-paragraph-1">{`There's no bank account, how to get paid?`}</p>
          <p className="preset-paragraph-2">{`Click on the plus button to add bank accounts.`}</p>
        </>
      );
    } else if (emptyType === 'cant-find-anything') {
      return (
        <>
          <p className="preset-paragraph-1">{`I've failed you, can't find anything :(`}</p>
          <p className="preset-paragraph-2">{`Try searching for something else.`}</p>
        </>
      );
    } else if (emptyType === 'add-more') {
      return (
        <>
          <p className="preset-paragraph-1">{`Add more for more commission ;)`}</p>
          <p className="preset-paragraph-2">{`Click on the plus button to add Fave products.`}</p>
        </>
      );
    } else if (emptyType === 'seems-empty') {
      return (
        <>
          <p className="preset-paragraph-1">{`It seems to be empty here.`}</p>
          <p className="preset-paragraph-2">{`Try again, I'm sure you'll find it eventually.`}</p>
        </>
      );
    } else {
      return description;
    }
  };
  return (
    <>
      <AntEmpty
        image={emptyImage()}
        description={emptyDescription()}
        {...props}
      />
    </>
  );
};

Empty.defaultProps = {};

export default Empty;
