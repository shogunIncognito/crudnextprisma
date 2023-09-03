/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma ?? new PrismaClient({ datasources: { db: { url: 'file:./dev.db' } } })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
