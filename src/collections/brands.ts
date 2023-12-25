import { CollectionConfig } from "payload/types";

export const Brands: CollectionConfig = {
  slug: "brands",
  admin: {
    useAsTitle: "name"
  },
  hooks: {
    beforeChange: [({ req, data }) => {return {...data, user: req.user.id}}]
  },
  access: {},
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      admin: {
        condition: () => false
      }
    },
    {
      name: 'name',
      label: 'Brand name',
      type: 'text',
      required: true
    }
  ],
}