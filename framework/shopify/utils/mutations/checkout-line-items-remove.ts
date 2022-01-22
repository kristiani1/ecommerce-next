import { checkoutDetailFragment } from "../common"

const checkoutLineItemRemoveMutation = `
    mutation($checkoutId: ID!, $lineItemIds: [ID!]!) {
        checkoutLineItemsRemove(
            checkoutId: $checkoutId
            lineItemIds: $lineItemIds
        ) {
        checkoutUserErrors {
            field
            message
        }
        checkout {
            ${checkoutDetailFragment}
        }
    }
}
`
export default checkoutLineItemRemoveMutation