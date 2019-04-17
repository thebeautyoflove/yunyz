import emptyLayout from '@/components/emptyLayout'
import productList from './list'
import productDetail from './detail'
export default [
	{
		path: 'product',
		name: '',
		component: emptyLayout,
		children: [].concat(productList,productDetail)
	},
]