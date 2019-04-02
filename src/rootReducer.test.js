import rootReducer from './rootReducer'


describe("rootReducer", () => {
  it("returns correct state for adding to cart", () => {
    const result = rootReducer({
        itemsInCart: []
    }, {type: "ADD_TO_CART", payload: {item: "test"}})

    expect(result).toEqual({
        itemsInCart: ["test"]
    })
  })

  it("returns correct state for removing from cart", () => {
    const result = rootReducer({
        itemsInCart: [{id: 1}]
    }, {type: "REMOVE_FROM_CART", payload: {id: 1}})

    expect(result).toEqual({
        itemsInCart: []
    })
  })

  it("returns correct state for wrong action type", () => {
    const result = rootReducer({
        itemsInCart: []
    }, {type: "TEST_WILL_NOT_MATCH", payload: {id: 1}})

    expect(result).toEqual({
        itemsInCart: []
    })
  })
})