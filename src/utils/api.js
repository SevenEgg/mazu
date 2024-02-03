import {
    request,
} from './index';


const HTTP_SERVER = "http://127.0.0.1:3002/";

// 获取分类列表 
const GET_CATES_LIST_API = HTTP_SERVER + "api/v1/cates/list";
// 新建分类
const CREATE_CATES_API = HTTP_SERVER + "api/v1/cates/create";
// 更新分类
const UPDATE_CATES_API = HTTP_SERVER + "api/v1/cates/edit";
// 删除分类
const DELETE_CATES_API = HTTP_SERVER + "api/v1/cates/delete";
// 获取分类详情
const GET_CATES_DETAIL_API = HTTP_SERVER + "api/v1/cates/detail";

// 新增题库
const CREATE_PAPERS_API = HTTP_SERVER + "api/v1/paper/create";
// 编辑题库
const UPDATE_PAPERS_API = HTTP_SERVER + "api/v1/paper/edit";
// 获取题库列表 
const GET_PAPERS_ALIST_API = HTTP_SERVER + "api/v1/paper/list";
// 获取题库详情 
const GET_PAPERS_DETAIL_API = HTTP_SERVER + "api/v1/paper/detail";
// 删除题库
const DELETE_PAPERS_API = HTTP_SERVER + "api/v1/paper/delete";

// 新增题目 
const CREATE_EXAMS_API = HTTP_SERVER + "api/v1/exams/create";
// 更新题目 
const UPDATE_EXAMS_API = HTTP_SERVER + "api/v1/exams/edit";
// 删除题目 
const DELETE_EXAMS_API = HTTP_SERVER + "api/v1/exams/delete";
// 获取题目列表
const GET_EXAMS_LIST_API = HTTP_SERVER + "api/v1/exams/list";
// 获取题目详情
const GET_EXAMS_DETAIL_API = HTTP_SERVER + "api/v1/exams/detail";


export const methods = {
    // 获取分类列表

    getCatesList: async req => await request({
        url: GET_CATES_LIST_API,
        method: "JSON",
        req
    }),
    // 新建分类
    // qs
    // {
    //     "name":"其他",
    //     "idx":0,
    //     "picUrl":"",
    //     "status":false
    // }
    createCates: async req => await request({
        url: CREATE_CATES_API,
        method: "JSON",
        req
    }),
    // 更新分类
    updateCates: async req => await request({
        url: UPDATE_CATES_API,
        method: "JSON",
        req
    }),
    // 删除分类
    deleteCates: async req => await request({
        url: DELETE_CATES_API,
        method: "JSON",
        req
    }),
    // 获取分类详情
    getCatesDetail: async req => await request({
        url: GET_CATES_DETAIL_API,
        method: "JSON",
        req
    }),
    // 新增题库 
    createPapers: async req => await request({
        url: CREATE_PAPERS_API,
        method: "JSON",
        req
    }),
    // 编辑题库
    updatePapers: async req => await request({
        url: UPDATE_PAPERS_API,
        method: "JSON",
        req
    }),
    // 获取题库列表
    getPapersList: async req => await request({
        url: GET_PAPERS_ALIST_API,
        method: "JSON",
        req
    }),
    // 获取题库详情
    getPapersDetail: async req => await request({
        url: GET_PAPERS_DETAIL_API,
        method: "JSON",
        req
    }),
    // 删除题库
    deletePapers: async req => await request({
        url: DELETE_PAPERS_API,
        method: "JSON",
        req
    }),
    // 新增题目
    createExams: async req => await request({
        url: CREATE_EXAMS_API,
        method: "JSON",
        req
    }),
    // 更新题目
    updateExams: async req => await request({
        url: UPDATE_EXAMS_API,
        method: "JSON",
        req
    }),
    // 删除题目
    deleteExams: async req => await request({
        url: DELETE_EXAMS_API,
        method: "JSON",
        req
    }),
    // 获取题目列表
    getExamsList: async req => await request({
        url: GET_EXAMS_LIST_API,
        method: "JSON",
        req
    }),
    // 获取题目详情
    getExamsDetail: async req => await request({
        url: GET_EXAMS_DETAIL_API,
        method: "JSON",
        req
    }),
}   