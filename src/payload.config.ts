import { buildConfig } from "payload/config"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import path from "path"
import { Users } from "./collections/users"
import dotenv from 'dotenv'
import { Products } from "./collections/products/products"
import { Brands } from "./collections/brands"
import { Media } from "./collections/media"
import { ProductFiles } from "./collections/product-files"
import { Orders } from "./collections/orders"
import { Badges } from "./collections/badge"

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [Users, Products, Brands, Media, ProductFiles , Orders, Badges],
  routes: {
    admin: '/admin'
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- intern",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg"
    }
  },
  rateLimit: {
    max: 200
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts")
  }
})