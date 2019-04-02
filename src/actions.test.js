import { addToCart, removeFromCart } from './actions'
import { isMainThread } from 'worker_threads';


describe("addToCart", () => {
  it("returns correct action", () => {
    const result = addToCart({
      id: 1,
      name: "TEST NAME",
      price: "TEST PRICE",
      image_url: "TEST.COM"
    })

    expect(result).toEqual({
      type: "ADD_TO_CART",
      payload: {
        item: {
          id: 1,
          name: "TEST NAME",
          price: "TEST PRICE",
          image_url: "TEST.COM"
        }
      }
    })
  })
})

describe("removeFromCart", () => {
  it("returns correct action", () => {
    const result = removeFromCart(1)

    expect(result).toEqual({
      type: "REMOVE_FROM_CART",
      payload: {id: 1}
    })
  })
})