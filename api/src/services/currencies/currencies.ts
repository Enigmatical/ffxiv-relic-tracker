import type {
  QueryResolvers,
  MutationResolvers,
  CurrencyResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const currencies: QueryResolvers['currencies'] = () => {
  return db.currency.findMany()
}

export const currency: QueryResolvers['currency'] = ({ id }) => {
  return db.currency.findUnique({
    where: { id },
  })
}

export const createCurrency: MutationResolvers['createCurrency'] = ({
  input,
}) => {
  return db.currency.create({
    data: input,
  })
}

export const updateCurrency: MutationResolvers['updateCurrency'] = ({
  id,
  input,
}) => {
  return db.currency.update({
    data: input,
    where: { id },
  })
}

export const deleteCurrency: MutationResolvers['deleteCurrency'] = ({ id }) => {
  return db.currency.delete({
    where: { id },
  })
}

export const Currency: CurrencyResolvers = {
  item: (_obj, { root }) =>
    db.currency.findUnique({ where: { id: root.id } }).item(),
}
