// File: zakatBodies.ts
import { CollectionConfig } from 'payload';

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const ZakatBodies: CollectionConfig = {
  slug: 'zakat-bodies',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  // labels: {
  //   singular: 'Zakat Body',
  //   plural: 'Zakat Bodies',
  // },
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
      type: 'text',
      defaultValue: false,
    },
    {
      name: 'state',
      label: 'State',
      type: 'text',
    },
    {
      name: 'agencyCodeZakatFitrah',
      type: 'select',
      defaultValue: 'KTNIK',
      label: 'Agency Code (Zakat Fitrah)',
      options: [
        {
          label: 'KTNIK - Kelantan',
          value: 'KTNIK',
        },
        {
          label: 'JHRIK - Johor',
          value: 'JHRIK',
        },
        {
          label: 'NSNIK - N9',
          value: 'NSNIK',
        },
        {
          label: 'SBHIK - Sabah',
          value: 'SBHIK',
        },
        {
          label: 'SWHIK - Sarawak',
          value: 'SWHIK',
        },
        {
          label: 'PPZMAIWPIK - PPZMAIWP',
          value: 'PPZMAIWPIK',
        },
        {
          label: 'PLSIK - Perlis',
          value: 'PLSIK',
        },
        {
          label: 'PNGIK - Pulau Pinang',
          value: 'PNGIK',
        },
      ],
      required: true,
    },
    {
      name: 'agencyCodeZakatOther',
      type: 'select',
      defaultValue: 'KTNIK',
      label: 'Agency Code (Zakat Other)',
      options: [
        {
          label: 'KTNIK - Kelantan',
          value: 'KTNIK',
        },
        {
          label: 'JHRIK - Johor',
          value: 'JHRIK',
        },
        {
          label: 'NSNIK - N9',
          value: 'NSNIK',
        },
        {
          label: 'SBHIK - Sabah',
          value: 'SBHIK',
        },
        {
          label: 'SWHIK - Sarawak',
          value: 'SWHIK',
        },
        {
          label: 'PPZMAIWPIK - PPZMAIWP',
          value: 'PPZMAIWPIK',
        },
        {
          label: 'PLSIK - Perlis',
          value: 'PLSIK',
        },
        {
          label: 'PNGIK - Pulau Pinang',
          value: 'PNGIK',
        },
      ],
      required: true,
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
