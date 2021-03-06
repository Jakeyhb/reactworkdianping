import {FETCH_DATA} from "../middleware/api"
import { schema as shopSchema, getShopById} from "./entities/shops"
import { schema as productSchema, getProductDetail} from "./entities/products"

export const types = {
  // 获取产品详情
  FETCH_PRODUCT_DETAIL_REQUEST: 'DETAIL/FETCH_PRODUCT_DETAIL_REQUEST',
  FETCH_PRODUCT_DETAIL_SUCCESS: 'DETAIL/FETCH_PRODUCT_DETAIL_SUCCES',
  FETCH_PRODUCT_DETAIL_FAILURE: 'DETAIL/FETCH_PRODUCT_DETAIL_FAILURE',
  // 获取关联店铺信息
  FETCH_SHOP_REQUEST: 'DETAIL/FETCH_PRODUCT_DETAIL_REQUEST',
  FETCH_SHOP_SUCCESS: 'DETAIL/FETCH_PRODUCT_DETAIL_SUCCES',
  FETCH_SHOP_FAILURE: 'DETAIL/FETCH_PRODUCT_DETAIL_FAILURE',
}

const initialState = {
  product: {
    isFetching: false,
    id: null,
  },
  relatedShop: {
    isFetching: false,
    id: null,
  }
}

export const actions = {
  //获取商品详情
  loadProductDetail: id => {
    return (dispatch, getState) => {
      const product = getProductDetail(getState(),id);
      if(product) {
        return dispatch(fetchProductDetailSuccess(id))
      }
      const endpoint = url.getProductDetail(id);
      return dispatch(fetchProductDetail(endpoint, id));
    }
  },
  // 获取店铺信息
  loadShopById: id => {
    return (dispatch, getState) => {
      const shop = getShopById(getState(),id);
      if(shop) {
        return dispatch(fetchShopSuccess(id))
      }
      const endpoint = url.getShopById(id);
      return dispatch(fetchShopById(endpoint, id));
    }
  }
}

const fetchProductDetail = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_PRODUCT_DETAIL_REQUEST,
      types.FETCH_PRODUCT_DETAIL_SUCCESS,
      types.FETCH_PRODUCT_DETAIL_FAILURE,
    ],
    endpoint,
    schema: productSchema
  },
  id
})

const fetchShopById = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_SHOP_REQUEST,
      types.FETCH_SHOP_SUCCESS,
      types.FETCH_SHOP_FAILURE,
    ],
    endpoint,
    schema: shopSchema
  },
  id
})

const fetchProductDetailSuccess = (id) => ({
  type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
  id,
})

const fetchShopSuccess = (id) => ({
  type: types.FETCH_SHOP_SUCCESS,
  id,
})

const reducer = (state = {}, action) => {
  return state;
}

export default reducer;