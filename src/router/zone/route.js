import emptyLayout from '@/components/emptyLayout'
import index from './index'
export default [
	{
		path: 'zone',
		name: '',
		component: emptyLayout,
		children: [].concat(index)
	},
]