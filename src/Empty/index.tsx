import * as React from 'react'
import { Empty as AntEmpty, EmptyProps as AntEmptyProps } from 'antd'

import './style.css'
import {
  AddMoreSVG,
  CantFindAnythingSVG,
  NoBankAccountSVG,
  NoOutletSVG,
  NothingHereSVG,
  SeemsEmptySVG
} from '../assets/icons'

type EmptyTypeType =
  | 'nothing-here'
  | 'no-outlet'
  | 'no-bank-account'
  | 'cant-find-anything'
  | 'add-more'
  | 'seems-empty'
  | 'custom-image'

export type EmptyProps = AntEmptyProps & {
  emptyType?: EmptyTypeType
  customTitle?: string
  customDescription?: string
}

const emptyTypeObject = {
  'nothing-here': {
    image: <NothingHereSVG />,
    error_title: 'Nothing here yet, nada.',
    error_description: 'Check back later, it might appear.'
  },
  'nothing-outlet': {
    image: <NoOutletSVG />,
    error_title: 'Why no outlet eh?',
    error_description: 'Click on the plus button to add outlets.'
  },
  'no-bank-account': {
    image: <NoBankAccountSVG />,
    error_title: `There's no bank account, how to get paid?`,
    error_description: 'Click on the plus button to add bank accounts.'
  },
  'cant-find-anything': {
    image: <CantFindAnythingSVG />,
    error_title: `I've failed you, can't find anything :(`,
    error_description: 'Try searching for something else.'
  },
  'add-more': {
    image: <AddMoreSVG />,
    error_title: 'Add more for more commission ;)',
    error_description: 'Click on the plus button to add Fave products.'
  },
  'seems-empty': {
    image: <SeemsEmptySVG />,
    error_title: 'It seems to be empty here.',
    error_description: `Try again, I'm sure you'll find it eventually.`
  }
}

const emptyImage = ({ image, emptyType }: { image: React.ReactNode; emptyType: EmptyTypeType }) =>
  emptyType !== 'custom-image' ? emptyTypeObject[emptyType].image : image

const PresetParagraphs = ({ paragraphOne, paragraphTwo }: { paragraphOne?: string; paragraphTwo?: string }) => (
  <>
    <p className="preset-paragraph-1">{paragraphOne}</p>
    <p className="preset-paragraph-2">{paragraphTwo}</p>
  </>
)

const emptyDescription = ({
  description,
  emptyType,
  customTitle,
  customDescription
}: {
  description: React.ReactNode
  emptyType: string
  customTitle?: string
  customDescription?: string
}) =>
  description || (customTitle !== undefined && customDescription !== undefined) ? (
    <PresetParagraphs paragraphOne={customTitle} paragraphTwo={customDescription} />
  ) : (
    <PresetParagraphs
      paragraphOne={emptyTypeObject[emptyType].error_title}
      paragraphTwo={emptyTypeObject[emptyType].error_description}
    />
  )

const Empty: React.FC<EmptyProps> = ({
  emptyType = 'custom-image',
  image,
  description,
  customTitle = '',
  customDescription = '',
  ...props
}) => {
  const imageProp = emptyImage({ image, emptyType })
  const descriptionProp = emptyDescription({ description, emptyType, customTitle, customDescription })

  return <AntEmpty image={imageProp} description={descriptionProp} {...props} />
}

export default Empty
