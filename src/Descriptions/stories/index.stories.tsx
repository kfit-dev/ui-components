import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { default as Descriptions,DescriptionsItem } from '../index'

export default {
  title: 'Descriptions',
  component: Descriptions,
} as ComponentMeta<typeof Descriptions>;


export const Basic = () =>{
  return(
    <Descriptions title="Business Details" layout="vertical" colon={false}>
      <DescriptionsItem label="Business registration name">Puma Sdn Bhd</DescriptionsItem>
      <DescriptionsItem label="Business registration number">11223344X</DescriptionsItem>
      <DescriptionsItem label="Business registration address">Lot 123-A, Jalan Sungai Besar 45, Seksyen Sungai Besar, 67890 Sungai Besar, Kuala Lumpur.</DescriptionsItem>
      <DescriptionsItem label="Business registration name">123450000</DescriptionsItem>
      <DescriptionsItem label="Business brand name">Puma</DescriptionsItem>
      <DescriptionsItem label="Business type">Online merchant (e-commerce)</DescriptionsItem>
      <DescriptionsItem label="Website">www.puma.com.my</DescriptionsItem>
      <DescriptionsItem label="Category">Retail</DescriptionsItem>
      <DescriptionsItem label="Reporting category">Sportswear / Athletic</DescriptionsItem>
      <DescriptionsItem label="Merchant's MCC">1000 - Fashion retail</DescriptionsItem>
    </Descriptions>
  );
}
