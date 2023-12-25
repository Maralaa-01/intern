import { CollectionConfig } from "payload/types";
import { items } from './items'

export const Badges: CollectionConfig = {
  slug: 'badge',
  admin: {
    useAsTitle: 'badges'
  },
  hooks: {
    beforeChange: [({ req, data }) => {return {...data, user: req.user.id}}]
  },
  fields: [
    {
      name: 'badges',
      label: 'Badge Type',
      type: 'select',
      options: items.map(
        ({ label, value }) => ({ label, value })
      ),
      hasMany: true,
      required: true
    },
    {
      name: 'percentage',
      label: 'OFF Percentage',
      type: 'number',
    },
    {
      name: 'products',
      label: 'Products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true
    },
    {
      name: "user",
      relationTo: "users",
      required: true,
      type: "relationship",
      admin: {
        hidden: true
      }
    },
  ]
}