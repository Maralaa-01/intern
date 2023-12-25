import { User } from "../../payload-types";
import { Categories } from "../../config";
import { Access, CollectionConfig } from "payload/types";

const hasAccess = (): Access => ({ req: { user: _user } }) => {
  const user = _user as User | undefined

  if (!user) return false
  if (user.role === 'admin') return true

  return {
  }
}

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name"
  },
  hooks: {
    beforeChange: [({ req, data }) => {return {...data, user: req.user.id}}]
  },
  access: {},
  fields: [
    {
      name: "user",
      relationTo: "users",
      required: true,
      hasMany: false,
      type: "relationship",
      admin: {
        condition: () => false
      }
    },
    {
      name: 'sku',
      label: 'SKU',
      type: 'text',
      required: true
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      label: 'Product details',
      type: 'textarea',
    },
    {
      name: 'price',
      label: 'Price in USD',
      type: 'number',
      min: 0,
      max: 10000,
      required: true
    },
    {
      name: 'category',
      label: 'Categories',
      type: 'select',
      options: Categories.map(
        ({ label, value }) => ({ label, value })
      ),
      required: true
    },
    {
      name: 'brand',
      label: 'Brands',
      type: 'relationship',
      relationTo: 'brands',
      required: true
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        {
          label: 'Available',
          value: 'available'
        },
        {
          label: 'Not Available',
          value: 'not_available'
        }
      ],
      required: true
    },
    {
      name: 'images',
      label: 'Product Images',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      required: true,
      labels: {
        singular: 'Image',
        plural: 'Images'
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true
        }
      ]
    },
    {
      name: 'product_files',
      label: 'Product file(s)',
      type: 'relationship',
      required: true,
      relationTo: 'product_files',
      hasMany: false,
    },
    {
      name: 'rating',
      label: 'Rate Number',
      type: 'number',
    },
    {
      name: 'rate',
      label: 'Rate',
      type: 'number',
    },
    {
      name: 'properties',
      label: 'Properties',
      type: 'group',
      fields: [
        {
          name: 'size',
          label: 'Size',
          type: 'text',
        },
        {
          name: 'memory',
          label: 'Memory',
          type: 'text',
        },
        {
          name: 'storage',
          label: 'Storage',
          type: 'text',
        }
      ]
    },
    {
      name: 'priceid',
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: 'text',
      admin: {
        hidden: true
      }
    }
  ]
}