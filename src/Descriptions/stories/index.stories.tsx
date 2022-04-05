import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { default as Descriptions,DescriptionsItem } from '../index'

export default {
  title: 'Descriptions',
  component: Descriptions,
} as ComponentMeta<typeof Descriptions>;


export const Basic = () =>{

  const description = {
    businessRegName : {
      label : "Business registration name",
      content : "Puma Sdn Bhd"
    },
    businessRegNumber: {
      label : "Business registration number",
      content : "11223344X"
    },
    businessRegAddress: {
      label : "Business registration address",
      content : "Lot 123-A, Jalan Sungai Besar 45, Seksyen Sungai Besar, 67890 Sungai Besar, Kuala Lumpur."
    },
    regNumber: {
      label : "SST/GST/VAT registration number",
      content : "123450000"
    },
    businessBrandName: {
      label : "Business brand name",
      content : "Puma"
    },
    businessType: {
      label : "Business type",
      content : "Online merchant (e-commerce)"
    },
    website: {
      label : "Website",
      content : "www.puma.com.my"
    },
    category: {
      label : "Category",
      content : "Retail"
    },
    reportCategory: {
      label : "Reporting category",
      content : "Sportswear / Athletic"
    },
    merchantMCC: {
      label : "Merchanr's MCC",
      content : "1000 - Fashion retail"
    }
  }

  return(
    <Descriptions title="Business Details" layout="vertical" colon={false}>
      {
        Object.keys(description).map((Item,index) =>(
          <DescriptionsItem key={index} label={description[Item].label}>{description[Item].content}</DescriptionsItem>
        ))
      }
    </Descriptions>
  );
}
