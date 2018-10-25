import { get, put, post, del, postForm, } from './ajax'

export default {
    "getBlogList": args => get('blogList', args)
}