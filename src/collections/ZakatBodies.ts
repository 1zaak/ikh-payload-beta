// File: zakatBodies.ts
import { CollectionConfig } from 'payload/types';

const ZakatBodies: CollectionConfig = {
  slug: 'zakat-bodies',
  labels: {
    singular: 'Zakat Body',
    plural: 'Zakat Bodies',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      required: true,
    },
    {
      name: 'useExternalUrl',
      label: 'Use External URL',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'state',
      label: 'State',
      type: 'text',
    },
    {
      name: 'agencyCodeZakatFitrah',
      label: 'Agency Code Zakat Fitrah',
      type: 'text',
    },
    {
      name: 'agencyCodeZakatOther',
      label: 'Agency Code Zakat Other',
      type: 'text',
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',  // Assuming a media collection exists
      relationTo: 'media',
    },
    {
      name: 'aboutUs',
      label: 'About Us',
      type: 'group',
      fields: [
        {
          name: 'heading',
          label: 'Heading',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
      ],
    },
  ],
};

export default ZakatBodies;
