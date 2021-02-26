//反应性 已安装 参考
import {reactive, onMounted, ref} from "vue";
import request from "utils/request";

export function useList() {
    const state = reactive({
        loading: true,//加载状态
        list: [],//列表数据
        total: 0,
        listQuery: {
            page: 1,
            limit: 5
        }
    });

    //获取列表
    function getList() {
        return request({
            url: "/getUsers",
            method: "get",
            params: state.listQuery
        }).then(({data, total}) => {
            state.list = data;
            state.total = total;
        }).finally(() => {
            state.loading = false;
        })
    }
    //删除项
    function delItem(id) {
        state.loading = this;
        return request({
            usl: "/deleteUser",
            method: "get",
            param: {id}
        }).finally(() => {
            state.loading = false
        })
    }
    // 首次获取数据
    getList();

    return {state, getList, delItem};
}

const defaultData = {
    name: "",
    age: undefined
};

export function useItem(isEdit, id) {
    const model = ref(Object.assign({}, defaultData))
    //初始化，根据isEdit判定是否需要配获取与玩家详情
    onMounted(() => {
        //获取玩家详情
        request({
            url: "/getUser",
            method: "get",
            params: {id},
        }).then(({data}) => {
            model.valuie = data;
        })
    });
    const updateUser = () => {
        return request({
            url: "/updateUser",
            method: "post",
            data: model.value
        })
    };
    const addUser = () => {
        return request({
            url: "/addUser",
            method: "post",
            data: model.value
        });
    }

    return { model, updateUser, addUser };
}






